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
      setLoading(true);
      const response = await fetch("/api/courses", {
        // <-- FIXED
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Data: allValues }),
      });

      if (!response.ok) throw new Error("Failed to create user");

      message.success("User created successfully");

      setIsModalOpen(false);
      form.resetFields();
    } catch (error) {
      message.error(error.message);
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
