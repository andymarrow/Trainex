import React, { useState, useEffect, useRef } from "react";
import { Input, Card, Space, Typography, Button as AntdButton } from "antd";

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

  // Use ref to track if we're initializing
  const initializing = useRef(true);

  // Initialize from parent - runs only once when quizData changes
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

  // Track previous form values to prevent unnecessary updates
  const prevFormValues = useRef(formValues);

  // Only call onChange when formValues actually change
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
            <Input
              type="number"
              placeholder="Number of Questions"
              value={formValues[value].count}
              onChange={(e) =>
                handleMetaChange(value, "count", parseInt(e.target.value) || 0)
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
                            <select
                              value={q.answer}
                              onChange={(e) =>
                                updateQuestion(
                                  value,
                                  idx,
                                  "answer",
                                  e.target.value
                                )
                              }
                              style={{
                                width: "100%",
                                padding: 8,
                                borderRadius: 4,
                              }}
                            >
                              {q.options?.map((opt) => (
                                <option key={opt.label} value={opt.label}>
                                  {opt.label} - {opt.text}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      )}

                      {value === "trueFalse" && (
                        <div style={{ marginTop: 16 }}>
                          <Title level={5}>Correct Answer:</Title>
                          <select
                            value={q.answer}
                            onChange={(e) =>
                              updateQuestion(
                                value,
                                idx,
                                "answer",
                                e.target.value
                              )
                            }
                            style={{
                              width: "100%",
                              padding: 8,
                              borderRadius: 4,
                            }}
                          >
                            <option value="true">True</option>
                            <option value="false">False</option>
                          </select>
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
