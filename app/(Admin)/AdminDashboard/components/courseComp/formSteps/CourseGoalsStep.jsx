import React, { useEffect } from "react";
import { Form, Input, Checkbox, Select, Button, Divider } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const CourseGoalsStep = () => {
  const form = Form.useFormInstance();

  return (
    <div className="p-4">
      {/* Learning Outcomes */}
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

      {/* Requirements */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Requirements</h3>
        <Form.List name="requirements">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <div key={key} className="flex items-center mb-3">
                  <Form.Item
                    {...restField}
                    name={[name]}
                    className="flex-grow mb-0"
                  >
                    <Input placeholder="Add requirement (e.g., Basic JavaScript knowledge)" />
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
                Add Requirement
              </Button>
            </>
          )}
        </Form.List>
      </div>

      <Divider />

      {/* Target Audience */}
      <div>
        <h3 className="text-lg font-medium mb-2">Target Audience</h3>
        <Form.Item name="audience">
          <Checkbox.Group className="grid grid-cols-2 gap-4">
            {[
              "beginners",
              "career_changers",
              "students",
              "professionals",
              "managers",
              "entrepreneurs",
            ].map((item) => (
              <Checkbox key={item} value={item}>
                {item
                  .split("_")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </Checkbox>
            ))}
          </Checkbox.Group>
        </Form.Item>

        <Form.Item name="customAudience" label="Custom Audience Tags">
          <Select mode="tags" placeholder="Add tags (e.g., React developers)" />
        </Form.Item>
      </div>
    </div>
  );
};

export default CourseGoalsStep;
