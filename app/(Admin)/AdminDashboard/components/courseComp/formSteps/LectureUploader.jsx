import React, { useState } from "react";
import { Upload, Button, Progress, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const LectureUploader = () => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Simulate Vimeo upload (in real app, this would use Vimeo API)
  const uploadToVimeo = (file) => {
    return new Promise((resolve) => {
      setUploading(true);
      setProgress(0);

      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 5;
          if (newProgress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setUploading(false);
              message.success(`${file.name} uploaded to Vimeo`);
              resolve({
                url: `https://vimeo.com/${Math.floor(
                  Math.random() * 10000000
                )}`,
                name: file.name,
                duration: Math.floor(Math.random() * 1200), // Random duration in seconds
              });
            }, 500);
            return 100;
          }
          return newProgress;
        });
      }, 200);
    });
  };

  return (
    <div>
      <Upload
        multiple
        customRequest={async ({ file, onSuccess }) => {
          try {
            const result = await uploadToVimeo(file);
            onSuccess(result, file);
          } catch (error) {
            message.error("Upload failed");
          }
        }}
        showUploadList={false}
      >
        <Button icon={<UploadOutlined />} disabled={uploading}>
          Upload to Vimeo
        </Button>
      </Upload>

      {uploading && (
        <div className="mt-4">
          <div className="flex justify-between mb-1">
            <span>Uploading to Vimeo...</span>
            <span>{progress}%</span>
          </div>
          <Progress percent={progress} status="active" />
          <p className="text-xs text-gray-500 mt-1">
            Videos are securely uploaded to Vimeo for DRM protection
          </p>
        </div>
      )}
    </div>
  );
};

export default LectureUploader;
