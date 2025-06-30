import React, { useEffect } from "react";
import { Form, Input, Select, Card, Row, Col } from "antd";

const { Option } = Select;
const { TextArea } = Input;

const BasicInfoStep = () => {
  const form = Form.useFormInstance();
  useEffect(() => {
    console.log("Current form values:-------", form.getFieldsValue(true));
  }, [form]);
  return (
    <div>
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

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select category">
              <Option value="web">Web Development</Option>
              <Option value="mobile">Mobile Development</Option>
              <Option value="data">Data Science</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="subcategory" label="Sub-category">
            <Select placeholder="Select sub-category">
              <Option value="react">React.js</Option>
              <Option value="vue">Vue.js</Option>
              <Option value="angular">Angular</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        name="level"
        label="Difficulty Level"
        rules={[{ required: true }]}
      >
        <div className="flex gap-4">
          {["beginner", "intermediate", "advanced"].map((level) => (
            <Card
              key={level}
              hoverable
              className={`w-1/3 text-center cursor-pointer ${
                form.getFieldValue("level") === level ? "border-blue-500" : ""
              }`}
              onClick={() => form.setFieldValue("level", level)}
            >
              <h4 className="capitalize">{level}</h4>
              <p className="text-gray-500">
                {level === "beginner" && "No prior experience needed"}
                {level === "intermediate" && "Some experience required"}
                {level === "advanced" && "For professionals"}
              </p>
            </Card>
          ))}
        </div>
      </Form.Item>
    </div>
  );
};

export default BasicInfoStep;
