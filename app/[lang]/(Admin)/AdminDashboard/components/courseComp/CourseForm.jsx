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

const CourseForm = ({ initialData, onSubmit }) => {
	const [currentStep, setCurrentStep] = useState(0);
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);

	console.log(initialData);
	// Initialize form with data (create or edit)
	// In your CourseForm component
	useEffect(() => {
		const initializeForm = async () => {
			try {
				const values = initialData
					? {
							...initialData,
							section: initialData?.sections?.map((section) => ({
								...section,
								chapter: section.chapters,
								Exercise: section.exercises[0],
							})),
							outcomes: initialData.courseOutcomes,
							audience: initialData.targetAudience,
							requirements: initialData.roadmap,
					  }
					: JSON.parse(localStorage.getItem("courseDraft")) || {
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
							section: [],
							//media
							media: {},
							//pricing
							pricing: {},
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
					section: [],
					media: {},
					pricing: {},
				});
			}
		};

		initializeForm();
	}, [initialData, form]);

	// Auto-save draftingggggggg
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
			const allValues = form.getFieldsValue(true);

			// Transform sections data
			allValues.sections = allValues.section?.map((section) => {
				return {
					title: section.title,
					duration: section.duration,
					order: section.order,
					chapters: section.chapter,
					exercises: [section.Exercise],
				};
			});

			console.log("Submitting course data:", allValues);

			// Send course data as JSON (files are already uploaded via UploadThing)
			let response;
			if (type === "create") {
				response = await fetch("/api/courses", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(allValues),
				});
			} else {
				response = await fetch(`/api/courses/${initialData.id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(allValues),
				});
			}

			if (!response.ok) throw new Error(`Failed to ${type} course`);

			message.success(
				`Course ${
					type === "create" ? "created" : "updated"
				} successfully`
			);
			form.resetFields();
			onSubmit();
			localStorage.removeItem("courseDraft");
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
								form.validateFields()
									.then(nextStep)
									.catch(() =>
										message.error(
											"Complete required fields"
										)
									);
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

export default CourseForm;
