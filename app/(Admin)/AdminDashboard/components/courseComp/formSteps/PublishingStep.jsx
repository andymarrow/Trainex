import React from "react";
import { Form, Select, Card, Divider } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";

const { Option } = Select;

const finalChecks = [
  "Course title and description complete",
  "At least 4 learning outcomes defined",
  "Minimum 30 minutes of video content",
  "Course image uploaded",
  "Pricing information set",
  "Promotional video added",
];

const PublishingStep = () => {
  const form = Form.useFormInstance();

  return (
    <div>
      <div className="max-w-lg mx-auto">
        <h3 className="text-lg font-medium mb-4">Publication Status</h3>
        <Form.Item
          name="publishStatus"
          label="Publication Status"
          initialValue="draft"
        >
          <Select>
            <Option value="draft">Save as Draft</Option>
            <Option value="publish">Publish Now</Option>
          </Select>
        </Form.Item>

        <h3 className="text-lg font-medium mb-4 mt-8">Final Checks</h3>
        <Card>
          <ul className="mb-4 space-y-2">
            {finalChecks.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircleTwoTone twoToneColor="#52c41a" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Divider />
        </Card>
      </div>
    </div>
  );
};

export default PublishingStep;

//Feature this course
//preview
//Publishing Options
//SEO Score
