import React, { useState } from "react";
import { Form, Upload, Button, Card, Input, Progress } from "antd";
import { UploadOutlined, PlayCircleOutlined } from "@ant-design/icons";
import LectureUploader from "./LectureUploader";

const MediaUploadStep = () => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const form = Form.useFormInstance();

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-lg font-medium mb-3">Course Image</h3>
        <Form.Item
          name="courseImage"
          rules={[{ required: true, message: "Course image is required" }]}
        >
          <Upload
            listType="picture-card"
            maxCount={1}
            customRequest={dummyRequest}
            onChange={({ file }) => {
              if (file.status === "uploading") {
                setUploading(true);
                setProgress(0);
                // Simulate progress
                const interval = setInterval(() => {
                  setProgress((prev) => {
                    if (prev >= 100) {
                      clearInterval(interval);
                      setUploading(false);
                      return 100;
                    }
                    return prev + 10;
                  });
                }, 200);
              }
            }}
          >
            <div>
              <UploadOutlined />
              <div className="mt-2">Upload Image</div>
            </div>
          </Upload>
        </Form.Item>

        {uploading && (
          <div className="mt-2">
            <div className="flex justify-between mb-1">
              <span>Uploading...</span>
              <span>{progress}%</span>
            </div>
            <Progress percent={progress} status="active" />
          </div>
        )}

        <div className="mt-4">
          <h4 className="font-medium mb-2">Accessibility Features</h4>
          <Form.Item
            name="imageAltText"
            label="Alt Text"
            rules={[{ required: true }]}
          >
            <Input placeholder="Describe the image" />
          </Form.Item>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3">Promotional Video</h3>
        <Form.Item name="promoVideo">
          <Upload
            listType="picture-card"
            maxCount={1}
            customRequest={dummyRequest}
          >
            <div>
              <PlayCircleOutlined className="text-2xl" />
              <div className="mt-2">Upload Video</div>
            </div>
          </Upload>
        </Form.Item>

        <div className="mt-6">
          <h4 className="font-medium mb-2">Video Features</h4>
          <Form.Item name="videoTranscript" label="Transcript">
            <Upload>
              <Button icon={<UploadOutlined />}>Upload Transcript</Button>
            </Upload>
          </Form.Item>
        </div>

        <div className="mt-4">
          <h4 className="font-medium mb-2">Lecture Videos</h4>
          <LectureUploader />
        </div>
      </div>
    </div>
  );
};

export default MediaUploadStep;
