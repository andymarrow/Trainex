import React, { useEffect, useState } from "react";
import {
	Form,
	Input,
	Select,
	Row,
	Col,
	Checkbox,
	Divider,
	Radio,
	InputNumber,
} from "antd";

const { Option } = Select;
const { TextArea } = Input;

const BasicInfoStep = () => {
	const form = Form.useFormInstance();

	return (
		<div className="p-4">
			{/* Course Title */}
			<Form.Item
				name="title"
				label="Course Title"
				// rules={[
				//   { required: true, message: "Title is required" },
				//   { min: 15, message: "Minimum 15 characters" },
				// ]}
			>
				<Input
					placeholder="Master React in 2023"
					showCount
					maxLength={100}
				/>
			</Form.Item>
			{/* Subtitle */}
			<Form.Item
				name="description"
				label="Description"
				// rules={[{ required: true, message: "Subtitle is required" }]}
			>
				<TextArea
					rows={3}
					placeholder="Brief description for course listings"
					showCount
					maxLength={120}
				/>
			</Form.Item>
			{/* Duration */}
			<Form.Item
				name="duration"
				label="Duration"
				// rules={[{ required: true, message: "Duration is required" }]}
			>
				<InputNumber placeholder="e.g. Duration in hourse" min={1} />
			</Form.Item>
			<InstructorSelect />
			{/* <Divider orientation="left">Instructor Information</Divider>
			<Form.Item
				name={["instructor", "name"]}
				label="Instructor Name"
				// rules={[{ required: true, message: "Instructor name is required" }]}
			>
				<Input placeholder="John Doe" prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item
				name={["instructor", "bio"]}
				label="Instructor Bio"
				// rules={[{ required: true, message: "Instructor bio is required" }]}
			>
				<TextArea
					rows={3}
					placeholder="Expert in React with 10 years of experience..."
					showCount
					maxLength={500}
				/>
			</Form.Item>*/}

			<Divider orientation="left">Course Details</Divider>
			{/* Category and Subcategory */}
			<Row gutter={16}>
				<Col span={12}>
					<Form.Item
						name="category"
						label="Category"
						// rules={[{ required: true, message: "Category is required" }]}
					>
						<Select placeholder="Select category">
							<Option value="web">Web Development</Option>
							<Option value="mobile">Mobile Development</Option>
							<Option value="data">Data Science</Option>
							<Option value="design">UI/UX Design</Option>
						</Select>
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item name="subcategory" label="Sub-category">
						<Select placeholder="Select sub-category">
							<Option value="react">React.js</Option>
							<Option value="vue">Vue.js</Option>
							<Option value="angular">Angular</Option>
							<Option value="node">Node.js</Option>
						</Select>
					</Form.Item>
				</Col>
			</Row>
			{/* Difficulty Level - Checkbox Style */}
			<Form.Item
				name="level"
				label="Difficulty Level"
				// rules={[
				//   { required: true, message: "Please select a difficulty level" },
				// ]}
			>
				<Radio.Group className="w-full">
					<Row gutter={16}>
						{[
							{
								value: "Beginner",
								label: "Beginner",
								description: "No prior experience needed",
							},
							{
								value: "Intermediate",
								label: "Intermediate",
								description: "Some experience required",
							},
							{
								value: "Advanced",
								label: "Advanced",
								description: "For experienced professionals",
							},
						].map((level) => (
							<Col span={8} key={level.value}>
								<div
									className={`p-4 border rounded-lg cursor-pointer hover:border-blue-300 ${
										form.getFieldValue("level") ===
										level.value
											? "border-blue-500 border-2"
											: ""
									}`}
									onClick={() =>
										form.setFieldsValue({
											level: level.value,
										})
									}
								>
									<Radio
										value={level.value}
										checked={
											form.getFieldValue("level") ===
											level.value
										}
										onChange={() =>
											form.setFieldsValue({
												level: level.value,
											})
										}
										className="mb-2"
									>
										{level.label}
									</Radio>
									<p className="text-gray-500 text-sm ml-6">
										{level.description}
									</p>
								</div>
							</Col>
						))}
					</Row>
				</Radio.Group>
			</Form.Item>
		</div>
	);
};

export default BasicInfoStep;

const InstructorSelect = () => {
	const [instructors, setInstructors] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchInstructors = async () => {
			try {
				const res = await fetch("/api/instructors");
				const data = await res.json();
				setInstructors(data?.instructors || []); // Adjust if your data is nested
			} catch (error) {
				console.error("Failed to fetch instructors:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchInstructors();
	}, []);

	return (
		<>
			<Divider orientation="left">Instructor Information</Divider>

			<Form.Item
				name="instructorId"
				label="Instructor"
				rules={[
					{ required: true, message: "Please select an instructor" },
				]}
			>
				<Select
					placeholder="Select an instructor"
					loading={loading}
					showSearch
					filterOption={(input, option) =>
						option?.children
							.toLowerCase()
							.includes(input.toLowerCase())
					}
				>
					{instructors.map((instructor) => (
						<Option key={instructor.id} value={instructor.id}>
							{instructor?.user?.name}
						</Option>
					))}
				</Select>
			</Form.Item>
		</>
	);
};
