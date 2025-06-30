import React from "react";
import { Form, Input, Checkbox, Select, Button, Divider } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const CourseGoalsStep = () => (
  <div>
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-2">Learning Outcomes</h3>
      <Form.List name="outcomes">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <div key={key} className="flex items-center mb-3">
                <Form.Item
                  {...restField}
                  name={[name]}
                  rules={[{ required: true, message: "Outcome is required" }]}
                  className="flex-grow mb-0"
                >
                  <Input placeholder="Students will be able to..." />
                </Form.Item>
                {fields.length > 1 && (
                  <MinusCircleOutlined
                    className="ml-3 text-red-500 text-lg"
                    onClick={() => remove(name)}
                  />
                )}
              </div>
            ))}
            <Button
              type="dashed"
              onClick={() => add()}
              icon={<PlusOutlined />}
              className="w-full"
            >
              Add Outcome
            </Button>
          </>
        )}
      </Form.List>
    </div>

    <Divider />

    <div className="mb-6">
      <h3 className="text-lg font-medium mb-2">Requirements</h3>
      <Form.Item name="requirements">
        <TextArea rows={3} placeholder="Prerequisites or resources needed" />
      </Form.Item>
    </div>

    <Divider />

    <div>
      <h3 className="text-lg font-medium mb-2">Target Audience</h3>
      <Form.Item name="audience">
        <Checkbox.Group className="grid grid-cols-2 gap-4">
          {["beginners", "career_changers", "students", "professionals"].map(
            (item) => (
              <Checkbox key={item} value={item}>
                {item
                  .split("_")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </Checkbox>
            )
          )}
        </Checkbox.Group>
      </Form.Item>

      <Form.Item name="customAudience" label="Custom Audience Tags">
        <Select mode="tags" placeholder="Add tags (e.g., React developers)" />
      </Form.Item>
    </div>
  </div>
);

export default CourseGoalsStep;
