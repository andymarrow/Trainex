"use client";
import React, { useState, useEffect } from "react";
import { Steps, Form, Button, message } from "antd";
import BasicInfoStep from "./formSteps/BasicInfoStep";
import CourseGoalsStep from "./formSteps/CourseGoalsStep";
import CurriculumBuilderStep from "./formSteps/CurriculumBuilderStep";
import MediaUploadStep from "./formSteps/MediaUploadStep";
import PricingStep from "./formSteps/PricingStep";
import PublishingStep from "./formSteps/PublishingStep";

const { Step } = Steps;

const CourseWizard = ({ initialData, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  // Initialize form with data (create or edit)
  // In your CourseWizard component
  useEffect(() => {
    const initializeForm = async () => {
      try {
        const values = initialData ||
          JSON.parse(localStorage.getItem("courseDraft")) || {
            //basic info
            title: "",
            subtitle: "",
            instructor: {
              name: "",
              bio: "",
            },
            category: undefined,
            subcategory: undefined,
            level: "beginner",
            //course goals
            outcomes: [],
            requirements: [],
            audience: [],
            customAudience: [],
            //curriculum
            section: [
              // {
              //   title: "",
              //   order: "1",
              //   chapter: [
              //     {
              //       title: "",
              //       content: [
              //         {
              //           type: "",
              //           title: "",
              //           fileUrl: "",
              //           duration: "",
              //           quizData: {
              //             multiple_choice: {
              //               count: 0,
              //               title: "",
              //               questions: [],
              //             },
              //             fillblank: { count: 0, title: "", questions: [] },
              //             truefalse: { count: 0, title: "", questions: [] },
              //           },
              //         },
              //       ],
              //     },
              //   ],
              //   Exercise: {
              //     title: "",
              //     description: "",
              //     order: "2",
              //     duration: "",
              //   },
              // },
            ],
            //media
            media: {
              thumbnail: null,
              promoVideo: null,
            },
            //pricing
            pricing: {
              model: "free",
              amount: 0,
              currency: "USD",
            },
          };

        form.setFieldsValue(values);
      } catch (e) {
        console.error("Form initialization failed:", e);
        form.setFieldsValue({
          //basic info
          title: "",
          subtitle: "",
          instructor: {
            name: "",
            bio: "",
          },
          category: undefined,
          subcategory: undefined,
          level: "beginner",
          //course goals
          outcomes: [],
          requirements: [],
          audience: [],
          customAudience: [],

          // curriculum
          section: [
            // {
            //   title: "",
            //   order: 1,
            //   chapter: [
            //     {
            //       title: "",
            //       content: [],
            //     },
            //   ],
            //   Exercise: {
            //     title: "",
            //     description: "",
            //     questions: [],
            //     order: 2,
            //     duration: 30,
            //   },
            // },
          ],
        });
      }
    };

    initializeForm();
  }, [initialData, form]);

  // Auto-save draft
  useEffect(() => {
    const interval = setInterval(() => {
      const values = form.getFieldsValue(true); // true to get all nested fields
      localStorage.setItem("courseDraft", JSON.stringify(values));
      console.log("Autosaved values:", values);
    }, 60000);

    return () => clearInterval(interval);
  }, [form]);
  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);
  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const allValues = form.getFieldsValue(true); // Get complete form data
      console.log("Submitting all values:", allValues);
      await onSubmit(allValues);
      localStorage.removeItem("courseDraft");
      message.success(initialData ? "Course updated!" : "Course created!");
    } catch (error) {
      message.error("Submission failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    { title: "Basic Info", component: <BasicInfoStep /> },
    { title: "Course Goals", component: <CourseGoalsStep /> },
    {
      title: "Curriculum",
      component: (
        <Form.Item name="section">
          <CurriculumBuilderStep />
        </Form.Item>
      ),
    },
    { title: "Media", component: <MediaUploadStep /> },
    { title: "Pricing", component: <PricingStep /> },
    { title: "Publish", component: <PublishingStep /> },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Steps current={currentStep} className="mb-8">
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="bg-white p-6 rounded-lg shadow"
      >
        {steps[currentStep].component}

        <div className="flex justify-between mt-8">
          <Button onClick={prevStep} disabled={currentStep === 0}>
            Previous
          </Button>

          {currentStep < steps.length - 1 ? (
            <Button
              type="primary"
              onClick={() => {
                form
                  .validateFields()
                  .then(nextStep)
                  .catch(() => message.error("Complete required fields"));
              }}
            >
              Next
            </Button>
          ) : (
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="bg-green-600 hover:bg-green-700"
            >
              {initialData ? "Update Course" : "Publish Course"}
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
};

export default CourseWizard;

/*
==============================
but this on logic of quiz its nice and perfect only the problem is its not save the data,
its make empty for question array
 

// QuizSectionBuilder.jsx
import React, { useState, useEffect } from "react";
import { Input, Select, Card, Space, Typography } from "antd";

const { Title } = Typography;

const questionTypes = [
  { value: "multiple_choice", label: "Multiple Choice" },
  { value: "truefalse", label: "True/False" },
  { value: "fillblank", label: "Fill in the Blank" },
];

const letterLabel = (index) => String.fromCharCode(65 + index); // A, B, C...

export default function QuizSectionBuilder({ onChange }) {
  const [formValues, setFormValues] = useState({
    multiple_choice: { count: 0, title: "", questions: [] },
    truefalse: { count: 0, title: "", questions: [] },
    fillblank: { count: 0, title: "", questions: [] },
  });

  useEffect(() => {
    console.log("Current Quiz Data:", formValues);
    if (onChange) onChange(formValues);
  }, [formValues]);

  const handleMetaChange = (type, field, value) => {
    const updated = { ...formValues };
    updated[type][field] = value;
    setFormValues(updated);
  };

  const generateAll = () => {
    const updated = { ...formValues };
    Object.keys(updated).forEach((type) => {
      const { count } = updated[type];
      updated[type].questions = Array.from({ length: count }, () => ({
        type,
        question: "",
        options: type === "multiple_choice" ? [] : undefined,
        answer: "",
      }));
    });
    setFormValues(updated);
    if (onChange) onChange(updated);
  };

  const updateQuestion = (type, idx, updatedData) => {
    const updated = { ...formValues };
    updated[type].questions[idx] = {
      ...updated[type].questions[idx],
      ...updatedData,
    };
    setFormValues(updated);
    if (onChange) onChange(updated);
  };

  const updateOption = (type, qIdx, oIdx, text) => {
    const options = [...(formValues[type].questions[qIdx].options || [])];
    options[oIdx] = {
      label: letterLabel(oIdx),
      text,
      correct: options[oIdx]?.correct || false,
    };
    updateQuestion(type, qIdx, { options });
  };

  const addOption = (type, qIdx) => {
    const options = [...(formValues[type].questions[qIdx].options || [])];
    options.push({
      label: letterLabel(options.length),
      text: "",
      correct: false,
    });
    updateQuestion(type, qIdx, { options });
  };

  const setCorrectOption = (type, qIdx, label) => {
    const updated = (formValues[type].questions[qIdx].options || []).map(
      (opt) => ({
        ...opt,
        correct: opt.label === label,
      })
    );
    updateQuestion(type, qIdx, { options: updated });
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
                handleMetaChange(value, "count", Number(e.target.value))
              }
              style={{ width: 200 }}
            />
          </Space>
        </Card>
      ))}

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={generateAll}
      >
        Generate All Question Inputs
      </button>

      <div className="mt-6">
        {questionTypes.map(
          ({ value, label }) =>
            formValues[value].questions.length > 0 && (
              <div key={value}>
                <Title level={2}>{label} Part</Title>
                <Card
                  title={`Section: ${formValues[value].title}`}
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
                          updateQuestion(value, idx, {
                            question: e.target.value,
                          })
                        }
                      />

                      {value === "multiple_choice" && (
                        <>
                          {(q.options || []).map((opt, oIdx) => (
                            <Input
                              key={oIdx}
                              addonBefore={letterLabel(oIdx)}
                              value={opt.text}
                              onChange={(e) =>
                                updateOption(value, idx, oIdx, e.target.value)
                              }
                            />
                          ))}
                          <button
                            onClick={() => addOption(value, idx)}
                            className="bg-gray-200 px-2 py-1 rounded"
                          >
                            Add Option
                          </button>
                          <Select
                            placeholder="Correct Answer"
                            value={q.options.find((o) => o.correct)?.label}
                            onChange={(val) =>
                              setCorrectOption(value, idx, val)
                            }
                            options={q.options.map((opt) => ({
                              value: opt.label,
                              label: `${opt.label} - ${opt.text}`,
                            }))}
                            style={{ width: 250, marginTop: 8 }}
                          />
                        </>
                      )}

                      {value === "truefalse" && (
                        <Select
                          placeholder="Correct Answer"
                          value={q.answer}
                          onChange={(val) =>
                            updateQuestion(value, idx, { answer: val })
                          }
                          options={[
                            { value: "true", label: "True" },
                            { value: "false", label: "False" },
                          ]}
                          style={{ width: 200, marginTop: 8 }}
                        />
                      )}

                      {value === "fillblank" && (
                        <Input
                          placeholder="Correct Answer"
                          value={q.answer}
                          onChange={(e) =>
                            updateQuestion(value, idx, {
                              answer: e.target.value,
                            })
                          }
                          style={{ marginTop: 8 }}
                        />
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
*/

//old

/*
this way it was worked
there is only one problem with this 
the quiz logic
this component code saves every thing and parent will save data onlocal


import React from "react";
import { Input, Select, Button, Space, Card } from "antd";

const questionTypes = [
  { value: "truefalse", label: "True/False" },
  { value: "multiple", label: "Multiple Choice" },
  { value: "fillblank", label: "Fill in the Blank" },
];

const letterLabel = (index) => String.fromCharCode(65 + index); // A, B, C...

export default function QuizEditor({ questions = [], onChange }) {
  const updateQuestion = (index, newData) => {
    const newQuestions = [...questions];
    newQuestions[index] = { ...newQuestions[index], ...newData };
    onChange(newQuestions);
  };

  const addQuestion = () => {
    onChange([
      ...questions,
      { type: null, question: "", options: [], answer: "" },
    ]);
  };

  const removeQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    onChange(newQuestions);
  };

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      {questions.map((q, idx) => (
        <Card
          key={idx}
          title={`Question ${idx + 1}`}
          extra={
            <Button danger onClick={() => removeQuestion(idx)}>
              Delete
            </Button>
          }
        >
          <Space direction="vertical" style={{ width: "100%" }}>
            <Select
              placeholder="Question Type"
              value={q.type}
              onChange={(type) =>
                updateQuestion(idx, {
                  type,
                  question: "",
                  options: [],
                  answer: "",
                })
              }
              options={questionTypes}
              style={{ width: 200 }}
            />
            <Input.TextArea
              placeholder="Enter your question"
              value={q.question}
              onChange={(e) =>
                updateQuestion(idx, { question: e.target.value })
              }
              rows={2}
            />

            {q.type === "multiple" && (
              <>
                {(q.options || []).map((opt, optIdx) => (
                  <Input
                    key={optIdx}
                    addonBefore={letterLabel(optIdx)}
                    value={opt}
                    onChange={(e) => {
                      const newOpts = [...q.options];
                      newOpts[optIdx] = e.target.value;
                      updateQuestion(idx, { options: newOpts });
                    }}
                    style={{ width: "100%" }}
                  />
                ))}
                <Button
                  onClick={() =>
                    updateQuestion(idx, {
                      options: [...(q.options || []), ""],
                    })
                  }
                  type="dashed"
                  style={{ width: "100%" }}
                >
                  Add Option
                </Button>

                <Select
                  placeholder="Select Correct Answer"
                  value={q.answer}
                  onChange={(val) => updateQuestion(idx, { answer: val })}
                  options={(q.options || []).map((opt, optIdx) => ({
                    value: letterLabel(optIdx),
                    label: `${letterLabel(optIdx)} - ${opt}`,
                  }))}
                  style={{ width: 250 }}
                />
              </>
            )}

            {q.type === "truefalse" && (
              <Select
                placeholder="Correct Answer"
                value={q.answer}
                onChange={(val) => updateQuestion(idx, { answer: val })}
                options={[
                  { value: "true", label: "True" },
                  { value: "false", label: "False" },
                ]}
                style={{ width: 200 }}
              />
            )}

            {q.type === "fillblank" && (
              <Input
                placeholder="Correct Answer"
                value={q.answer}
                onChange={(e) =>
                  updateQuestion(idx, { answer: e.target.value })
                }
              />
            )}
          </Space>
        </Card>
      ))}

      <Button type="primary" onClick={addQuestion}>
        Add Question
      </Button>
    </Space>
  );
}
 */
