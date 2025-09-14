import React, { useEffect, useState } from "react";
import { Form, Upload, Button, Progress } from "antd";
import {
  UploadOutlined,
  PlayCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const MediaUploadStep = () => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [videoInputs, setVideoInputs] = useState([1]); // Start with one video input
  const form = Form.useFormInstance();

  // Initialize media state from form
  const [media, setMedia] = useState(() => {
    const formMedia = form.getFieldValue("media");
    return {
      courseImage: formMedia?.courseImage || null,
      promoVideos: Array.isArray(formMedia?.promoVideos)
        ? formMedia.promoVideos
        : [null],
    };
  });

  // Sync media with form whenever it changes
  useEffect(() => {
    form.setFieldsValue({ media });
  }, [media, form]);

  const handleFileUpload = (file, type, index) => {
    setUploading(true);
    setProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);

          // After upload completes, update media state
          const fileInfo = {
            name: file.name,
            type: file.type,
            size: file.size,
            // In real app: url from server response
            url: URL.createObjectURL(file),
          };

          if (type === "image") {
            setMedia((prev) => ({ ...prev, courseImage: fileInfo }));
          } else {
            setMedia((prev) => {
              const newVideos = [...prev.promoVideos];
              newVideos[index] = fileInfo;
              return { ...prev, promoVideos: newVideos };
            });
          }

          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const addVideoInput = () => {
    setVideoInputs([...videoInputs, videoInputs.length + 1]);
    setMedia((prev) => ({
      ...prev,
      promoVideos: [...prev.promoVideos, null],
    }));
  };

  const removeVideoInput = (index) => {
    if (videoInputs.length <= 1) return;

    const newInputs = videoInputs.filter((_, i) => i !== index);
    setVideoInputs(newInputs);

    setMedia((prev) => {
      const newVideos = [...prev.promoVideos];
      newVideos.splice(index, 1);
      return { ...prev, promoVideos: newVideos };
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-lg font-medium mb-3">Course Image</h3>
        <Form.Item
          rules={[
            {
              required: true,
              validator: () =>
                media.courseImage
                  ? Promise.resolve()
                  : Promise.reject("Course image is required"),
            },
          ]}
        >
          <Upload
            listType="picture-card"
            maxCount={1}
            accept="image/*"
            showUploadList={false}
            beforeUpload={(file) => {
              handleFileUpload(file, "image", null);
              return false; // Prevent default upload
            }}
          >
            {media.courseImage ? (
              <div className="relative">
                <img
                  src={media.courseImage.url}
                  alt="Course"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <UploadOutlined className="text-white text-2xl" />
                </div>
              </div>
            ) : (
              <div>
                <UploadOutlined />
                <div className="mt-2">Upload Course Image</div>
              </div>
            )}
          </Upload>
          {media.courseImage && (
            <div className="mt-2 text-center text-sm">
              {media.courseImage.name}
            </div>
          )}
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
      </div>

      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-medium">Promotional Videos</h3>
          <Button
            type="dashed"
            onClick={addVideoInput}
            icon={<PlusOutlined />}
            size="small"
          >
            Add Video
          </Button>
        </div>

        {videoInputs?.map((_, index) => (
          <div key={index} className="mb-4 relative group">
            <Form.Item
              rules={
                index === 0
                  ? [
                      {
                        required: true,
                        validator: () =>
                          media.promoVideos[index]
                            ? Promise.resolve()
                            : Promise.reject(
                                "At least one promotional video is required"
                              ),
                      },
                    ]
                  : []
              }
            >
              <Upload
                listType="picture-card"
                maxCount={1}
                accept="video/*"
                showUploadList={false}
                beforeUpload={(file) => {
                  handleFileUpload(file, "video", index);
                  return false; // Prevent default upload
                }}
              >
                {media.promoVideos[index] ? (
                  <div className="relative w-full h-full">
                    <video className="w-full h-full object-cover">
                      <source src={media.promoVideos[index].url} />
                    </video>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <PlayCircleOutlined className="text-white text-2xl" />
                    </div>
                  </div>
                ) : (
                  <div>
                    <PlayCircleOutlined className="text-2xl" />
                    <div className="mt-2">
                      {index === 0
                        ? "Main Promo Video"
                        : `Additional Video ${index + 1}`}
                    </div>
                  </div>
                )}
              </Upload>
              {media.promoVideos[index] && (
                <div className="mt-2 text-center text-sm">
                  {media.promoVideos[index].name}
                </div>
              )}
            </Form.Item>

            {videoInputs.length > 1 && (
              <Button
                danger
                type="text"
                size="small"
                className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => removeVideoInput(index)}
              >
                ×
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaUploadStep;
