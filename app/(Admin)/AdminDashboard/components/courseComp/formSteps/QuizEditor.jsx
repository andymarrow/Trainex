import React, { useState, useEffect, useRef } from "react";
import {
  Input,
  Card,
  Radio,
  Space,
  Typography,
  Button as AntdButton,
  InputNumber,
} from "antd";

const { Title } = Typography;

const questionTypes = [
  { value: "multipleChoice", label: "Multiple Choice" },
  { value: "trueFalse", label: "True/False" },
  { value: "fillBlank", label: "Fill in the Blank" },
];

const letterLabel = (index) => String.fromCharCode(65 + index);

export default function QuizSectionBuilder({ quizData, onChange }) {
  const [formValues, setFormValues] = useState({
    multipleChoice: { count: 0, title: "", questions: [] },
    trueFalse: { count: 0, title: "", questions: [] },
    fillBlank: { count: 0, title: "", questions: [] },
  });

  const initializing = useRef(true);

  useEffect(() => {
    if (quizData && initializing.current) {
      setFormValues({
        multipleChoice: quizData.multiple_choice || {
          count: 0,
          title: "",
          questions: [],
        },
        trueFalse: quizData.truefalse || { count: 0, title: "", questions: [] },
        fillBlank: quizData.fillblank || { count: 0, title: "", questions: [] },
      });
      initializing.current = false;
    }
  }, [quizData]);

  const prevFormValues = useRef(formValues);

  useEffect(() => {
    if (
      !initializing.current &&
      onChange &&
      JSON.stringify(prevFormValues.current) !== JSON.stringify(formValues)
    ) {
      onChange({
        multiple_choice: { ...formValues.multipleChoice },
        truefalse: { ...formValues.trueFalse },
        fillblank: { ...formValues.fillBlank },
      });
      prevFormValues.current = formValues;
    }
  }, [formValues, onChange]);

  const handleMetaChange = (type, field, value) => {
    setFormValues((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [field]: value,
      },
    }));
  };

  const generateAll = () => {
    setFormValues((prev) => ({
      ...prev,
      multipleChoice: {
        ...prev.multipleChoice,
        questions: Array.from(
          { length: prev.multipleChoice.count || 0 },
          () => ({
            question: "",
            answer: "",
            options: Array.from({ length: 2 }, (_, i) => ({
              label: letterLabel(i),
              text: "",
            })),
          })
        ),
      },
      trueFalse: {
        ...prev.trueFalse,
        questions: Array.from({ length: prev.trueFalse.count || 0 }, () => ({
          question: "",
          answer: "true",
        })),
      },
      fillBlank: {
        ...prev.fillBlank,
        questions: Array.from({ length: prev.fillBlank.count || 0 }, () => ({
          question: "",
          answer: "",
        })),
      },
    }));
  };

  const updateQuestion = (type, idx, field, value) => {
    setFormValues((prev) => {
      const newQuestions = [...prev[type].questions];
      newQuestions[idx] = {
        ...newQuestions[idx],
        [field]: value,
      };
      return {
        ...prev,
        [type]: {
          ...prev[type],
          questions: newQuestions,
        },
      };
    });
  };

  const updateOption = (type, qIdx, oIdx, text) => {
    setFormValues((prev) => {
      const newQuestions = [...prev[type].questions];
      const newOptions = [...newQuestions[qIdx].options];
      newOptions[oIdx] = {
        ...newOptions[oIdx],
        text,
      };
      newQuestions[qIdx] = {
        ...newQuestions[qIdx],
        options: newOptions,
      };
      return {
        ...prev,
        [type]: {
          ...prev[type],
          questions: newQuestions,
        },
      };
    });
  };

  const addOption = (type, qIdx) => {
    setFormValues((prev) => {
      const newQuestions = [...prev[type].questions];
      const newOptions = [...newQuestions[qIdx].options];
      newOptions.push({
        label: letterLabel(newOptions.length),
        text: "",
      });
      newQuestions[qIdx] = {
        ...newQuestions[qIdx],
        options: newOptions,
      };
      return {
        ...prev,
        [type]: {
          ...prev[type],
          questions: newQuestions,
        },
      };
    });
  };

  return (
    <div>
      <Title level={4}>Quiz Configuration</Title>
      {questionTypes.map(({ value, label }) => (
        <Card
          key={value}
          title={`Setup: ${label}`}
          style={{ marginBottom: 24 }}
        >
          <Space direction="vertical" style={{ width: "100%" }}>
            <Input
              placeholder="Section Title"
              value={formValues[value].title}
              onChange={(e) => handleMetaChange(value, "title", e.target.value)}
              style={{ width: 400 }}
            />
            <InputNumber
              placeholder="Number of Questions"
              value={formValues[value].count}
              onChange={(val) =>
                handleMetaChange(value, "count", val !== null ? val : 0)
              }
              style={{ width: 200 }}
              min={0}
            />
          </Space>
        </Card>
      ))}

      <AntdButton
        type="primary"
        onClick={generateAll}
        style={{ marginBottom: 24 }}
      >
        Generate All Question Inputs
      </AntdButton>

      <div className="mt-6">
        {questionTypes.map(
          ({ value, label }) =>
            formValues[value].questions.length > 0 && (
              <div key={value}>
                <Title level={2}>{label} Part</Title>
                <Card
                  title={formValues[value].title}
                  style={{ marginBottom: 24 }}
                >
                  {formValues[value].questions.map((q, idx) => (
                    <Card
                      key={idx}
                      type="inner"
                      title={`Question ${idx + 1}`}
                      style={{ marginBottom: 12 }}
                    >
                      <Input.TextArea
                        placeholder="Question"
                        value={q.question}
                        onChange={(e) =>
                          updateQuestion(value, idx, "question", e.target.value)
                        }
                      />

                      {value === "multipleChoice" && (
                        <div style={{ marginTop: 16 }}>
                          <Title level={5}>Options:</Title>
                          {(q.options || []).map((opt, oIdx) => (
                            <div key={oIdx} style={{ marginBottom: 8 }}>
                              <Input
                                addonBefore={opt.label}
                                value={opt.text}
                                onChange={(e) =>
                                  updateOption(value, idx, oIdx, e.target.value)
                                }
                              />
                            </div>
                          ))}
                          <AntdButton
                            onClick={() => addOption(value, idx)}
                            style={{ marginTop: 8 }}
                          >
                            Add Option
                          </AntdButton>

                          <div style={{ marginTop: 16 }}>
                            <Title level={5}>Correct Answer:</Title>
                            <Radio.Group
                              value={q.answer}
                              onChange={(e) =>
                                updateQuestion(
                                  value,
                                  idx,
                                  "answer",
                                  e.target.value
                                )
                              }
                              style={{ width: "100%" }}
                            >
                              {q.options?.map((opt) => (
                                <Radio key={opt.label} value={opt.label}>
                                  {opt.label} - {opt.text}
                                </Radio>
                              ))}
                            </Radio.Group>
                          </div>
                        </div>
                      )}

                      {value === "trueFalse" && (
                        <div style={{ marginTop: 16 }}>
                          <Title level={5}>Correct Answer:</Title>
                          <Radio.Group
                            value={q.answer}
                            onChange={(e) =>
                              updateQuestion(
                                value,
                                idx,
                                "answer",
                                e.target.value
                              )
                            }
                            style={{ width: "100%" }}
                          >
                            <Radio value="true">True</Radio>
                            <Radio value="false">False</Radio>
                          </Radio.Group>
                        </div>
                      )}

                      {value === "fillBlank" && (
                        <div style={{ marginTop: 16 }}>
                          <Title level={5}>Correct Answer:</Title>
                          <Input
                            placeholder="Correct Answer"
                            value={q.answer}
                            onChange={(e) =>
                              updateQuestion(
                                value,
                                idx,
                                "answer",
                                e.target.value
                              )
                            }
                            style={{ width: "100%" }}
                          />
                        </div>
                      )}
                    </Card>
                  ))}
                </Card>
              </div>
            )
        )}
      </div>
    </div>
  );
}
