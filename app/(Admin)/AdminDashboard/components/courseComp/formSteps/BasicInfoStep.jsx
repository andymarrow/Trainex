import React, { use, useEffect } from "react";
import { Form, Input, Select, Row, Col, Checkbox, Divider } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Option } = Select;
const { TextArea } = Input;

const BasicInfoStep = () => {
  const form = Form.useFormInstance();
  useEffect(() => {
    console.log("BasicInfoStep mounted---------", form.getFieldsValue());
  }, [form]);
  return (
    <div className="p-4">
      {/* Course Title */}
      <Form.Item
        name="title"
        label="Course Title"
        rules={[
          { required: true, message: "Title is required" },
          { min: 15, message: "Minimum 15 characters" },
        ]}
      >
        <Input placeholder="Master React in 2023" showCount maxLength={100} />
      </Form.Item>

      {/* Subtitle */}
      <Form.Item
        name="subtitle"
        label="Subtitle"
        rules={[{ required: true, message: "Subtitle is required" }]}
      >
        <TextArea
          rows={3}
          placeholder="Brief description for course listings"
          showCount
          maxLength={120}
        />
      </Form.Item>

      <Divider orientation="left">Instructor Information</Divider>

      {/* Instructor Name */}
      <Form.Item
        name={["instructor", "name"]}
        label="Instructor Name"
        rules={[{ required: true, message: "Instructor name is required" }]}
      >
        <Input placeholder="John Doe" prefix={<UserOutlined />} />
      </Form.Item>

      {/* Instructor Bio */}
      <Form.Item
        name={["instructor", "bio"]}
        label="Instructor Bio"
        rules={[{ required: true, message: "Instructor bio is required" }]}
      >
        <TextArea
          rows={3}
          placeholder="Expert in React with 10 years of experience..."
          showCount
          maxLength={500}
        />
      </Form.Item>

      <Divider orientation="left">Course Details</Divider>

      {/* Category and Subcategory */}
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true, message: "Category is required" }]}
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
        rules={[
          { required: true, message: "Please select a difficulty level" },
        ]}
      >
        <Checkbox.Group className="w-full">
          <Row gutter={16}>
            {[
              {
                value: "beginner",
                label: "Beginner",
                description: "No prior experience needed",
              },
              {
                value: "intermediate",
                label: "Intermediate",
                description: "Some experience required",
              },
              {
                value: "advanced",
                label: "Advanced",
                description: "For experienced professionals",
              },
            ].map((level) => (
              <Col span={8} key={level.value}>
                <div
                  className={`p-4 border rounded-lg cursor-pointer hover:border-blue-300 ${
                    form.getFieldValue("level") === level.value
                      ? "border-blue-500 border-2"
                      : ""
                  }`}
                  onClick={() => form.setFieldsValue({ level: level.value })}
                >
                  <Checkbox
                    value={level.value}
                    checked={form.getFieldValue("level") === level.value}
                    onChange={() => form.setFieldsValue({ level: level.value })}
                    className="mb-2"
                  >
                    {level.label}
                  </Checkbox>
                  <p className="text-gray-500 text-sm ml-6">
                    {level.description}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      </Form.Item>
    </div>
  );
};

export default BasicInfoStep;
