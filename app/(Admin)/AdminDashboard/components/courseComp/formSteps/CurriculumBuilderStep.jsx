import React, { useState } from "react";
import {
  Button,
  Input,
  Card,
  Switch,
  Upload,
  Select,
  Space,
  Tooltip,
} from "antd";
import {
  PlusOutlined,
  DeleteOutlined,
  PlayCircleOutlined,
  FileTextOutlined,
  QuestionCircleOutlined,
  FileAddOutlined,
} from "@ant-design/icons";
import QuizEditor from "./QuizEditor";
const lectureTypes = [
  { value: "video", label: "Video", icon: <PlayCircleOutlined /> },
  { value: "text", label: "Text", icon: <FileTextOutlined /> },
  { value: "quiz", label: "Quiz", icon: <QuestionCircleOutlined /> },
  { value: "assignment", label: "Assignment", icon: <FileAddOutlined /> },
];

export default function CurriculumBuilderStep() {
  const [sections, setSections] = useState([]);

  // Add a new section
  const addSection = () => {
    setSections([...sections, { title: "", lectures: [] }]);
  };

  // Remove a section
  const removeSection = (sectionIdx) => {
    setSections(sections.filter((_, idx) => idx !== sectionIdx));
  };

  // Update section title
  const updateSectionTitle = (sectionIdx, title) => {
    const updated = [...sections];
    updated[sectionIdx].title = title;
    setSections(updated);
  };

  // Add lecture to section
  const addLecture = (sectionIdx, type) => {
    const updated = [...sections];
    updated[sectionIdx].lectures.push({
      type,
      title: "",
      duration: "",
      fileUrl: "",
      quizData: {},
      status: "draft",
    });
    setSections(updated);
  };

  // Remove lecture
  const removeLecture = (sectionIdx, lectureIdx) => {
    const updated = [...sections];
    updated[sectionIdx].lectures = updated[sectionIdx].lectures.filter(
      (_, idx) => idx !== lectureIdx
    );
    setSections(updated);
  };

  // Update lecture field
  const updateLecture = (sectionIdx, lectureIdx, field, value) => {
    const updated = [...sections];
    updated[sectionIdx].lectures[lectureIdx][field] = value;
    setSections(updated);
  };

  return (
    <div>
      <Button type="dashed" icon={<PlusOutlined />} onClick={addSection} block>
        Add Section
      </Button>
      <div className="mt-4 space-y-8">
        {sections.map((section, sectionIdx) => (
          <Card
            key={sectionIdx}
            title={
              <>
                <h1>{`Section${sectionIdx}`}</h1>
                <Input
                  placeholder="Section Title"
                  value={section.title}
                  onChange={(e) =>
                    updateSectionTitle(sectionIdx, e.target.value)
                  }
                  style={{ width: 300 }}
                />
              </>
            }
            extra={
              <Tooltip title="Delete Section">
                <Button
                  icon={<DeleteOutlined />}
                  danger
                  onClick={() => removeSection(sectionIdx)}
                />
              </Tooltip>
            }
          >
            <div className="space-y-4">
              {section.lectures.map((lecture, lectureIdx) => (
                <Card
                  key={lectureIdx}
                  size="small"
                  className="mb-2"
                  title={
                    <Space>
                      {lectureTypes.find((t) => t.value === lecture.type)?.icon}
                      <Input
                        placeholder="Lecture Title"
                        value={lecture.title}
                        onChange={(e) =>
                          updateLecture(
                            sectionIdx,
                            lectureIdx,
                            "title",
                            e.target.value
                          )
                        }
                        style={{ width: 200 }}
                      />
                    </Space>
                  }
                  extra={
                    <Tooltip title="Delete Lecture">
                      <Button
                        icon={<DeleteOutlined />}
                        danger
                        size="small"
                        onClick={() => removeLecture(sectionIdx, lectureIdx)}
                      />
                    </Tooltip>
                  }
                >
                  <Space direction="vertical" style={{ width: "100%" }}>
                    {(lecture.type === "video" ||
                      lecture.type === "text" ||
                      lecture.type === "assignment") && (
                      <Upload
                        beforeUpload={(file) => {
                          // handle upload logic here
                          updateLecture(
                            sectionIdx,
                            lectureIdx,
                            "fileUrl",
                            file.name
                          );
                          return false;
                        }}
                        showUploadList={false}
                      >
                        <Button>
                          Upload {lecture.type === "video" ? "Video" : "File"}
                        </Button>
                        {lecture.fileUrl && (
                          <span className="ml-2">{lecture.fileUrl}</span>
                        )}
                      </Upload>
                    )}
                    {lecture.type === "quiz" && (
                      <QuizEditor
                        quizData={lecture.quizData}
                        onChange={(data) =>
                          updateLecture(
                            sectionIdx,
                            lectureIdx,
                            "quizData",
                            data
                          )
                        }
                      />
                    )}
                    {(lecture.type === "video" || lecture.type === "text") && (
                      <Input
                        placeholder="Duration (e.g. 5:00)"
                        value={lecture.duration}
                        onChange={(e) =>
                          updateLecture(
                            sectionIdx,
                            lectureIdx,
                            "duration",
                            e.target.value
                          )
                        }
                        style={{ width: 150 }}
                      />
                    )}
                    <div>
                      <span>Status: </span>
                      <Switch
                        checked={lecture.status === "published"}
                        checkedChildren="Published"
                        unCheckedChildren="Draft"
                        onChange={(checked) =>
                          updateLecture(
                            sectionIdx,
                            lectureIdx,
                            "status",
                            checked ? "published" : "draft"
                          )
                        }
                      />
                    </div>
                  </Space>
                </Card>
              ))}
              <Select
                placeholder="Add Lecture"
                style={{ width: 180 }}
                onChange={(type) => addLecture(sectionIdx, type)}
                value={undefined}
                options={lectureTypes}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
