import React, { useState, useEffect } from "react";
import {
  Button,
  Input,
  Card,
  Switch,
  Upload,
  Select,
  Space,
  Tooltip,
  Collapse,
  Form,
} from "antd";
import {
  PlusOutlined,
  DeleteOutlined,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";
import QuizSectionBuilder from "./QuizEditor";

const { Panel } = Collapse;

const lectureTypes = [
  { value: "video", label: "Video" },
  { value: "text", label: "Text" },
  { value: "quiz", label: "Quiz" },
  { value: "assignment", label: "Assignment" },
];

export default function CurriculumBuilderStep() {
  const form = Form.useFormInstance();
  const [sections, setSections] = useState(form.getFieldValue("section") || []);
  const [activePanels, setActivePanels] = useState({});
  // const [sections, setSections] = useState([]);
  // const [activePanels, setActivePanels] = useState({});
  useEffect(() => {
    form.setFieldsValue({ section: sections });
  }, [sections, form]);
  useEffect(() => {
    console.log("section--------", sections);
  }, [sections]);
  // Toggle panel collapse
  const togglePanel = (sectionIdx, panelType) => {
    setActivePanels((prev) => ({
      ...prev,
      [sectionIdx]: {
        ...prev[sectionIdx],
        [panelType]: !prev[sectionIdx]?.[panelType],
      },
    }));
  };

  // Add a new section
  const addSection = () => {
    const newSection = {
      title: "",
      order: sections.length + 1,
      chapter: [
        {
          title: "Chapter 1",
          content: [],
        },
      ],
      Exercise: {
        title: "",
        description: "",
        questions: [],
        order: sections.length + 1,
        duration: 30,
      },
    };

    setSections([...sections, newSection]);
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

  // Update chapter title
  const updateChapterTitle = (sectionIdx, chapterIdx, title) => {
    const updated = [...sections];
    updated[sectionIdx].chapter[chapterIdx].title = title;
    setSections(updated);
  };

  // Add content to chapter
  const addContent = (sectionIdx, chapterIdx, type) => {
    const updated = [...sections];

    const newContent = {
      type,
      title: "",
      duration: type === "video" || type === "text" ? "0:00" : "",
      fileUrl: "",
      quizData:
        type === "quiz"
          ? {
              multiple_choice: { count: 0, title: "", questions: [] },
              truefalse: { count: 0, title: "", questions: [] },
              fillblank: { count: 0, title: "", questions: [] },
            }
          : undefined,
    };

    updated[sectionIdx].chapter[chapterIdx].content.push(newContent);
    setSections(updated);
  };

  // Remove content
  const removeContent = (sectionIdx, chapterIdx, contentIdx) => {
    const updated = [...sections];
    updated[sectionIdx].chapter[chapterIdx].content = updated[
      sectionIdx
    ].chapter[chapterIdx].content.filter((_, idx) => idx !== contentIdx);
    setSections(updated);
  };

  // Update content field
  const updateContent = (sectionIdx, chapterIdx, contentIdx, field, value) => {
    const updated = [...sections];
    updated[sectionIdx].chapter[chapterIdx].content[contentIdx][field] = value;
    setSections(updated);
  };

  // Update exercise field
  const updateExercise = (sectionIdx, field, value) => {
    const updated = [...sections];
    updated[sectionIdx].Exercise[field] = value;
    setSections(updated);
  };

  return (
    <div>
      <Form.Item name="section" hidden>
        <Input />
      </Form.Item>
      <Button type="dashed" icon={<PlusOutlined />} onClick={addSection} block>
        Add Section
      </Button>
      <div className="mt-4 space-y-8">
        {sections.map((section, sectionIdx) => (
          <Card
            key={sectionIdx}
            title={
              <>
                <h1>{`Section ${section.order}`}</h1>
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
              {/* Chapters */}
              {section.chapter.map((chapter, chapterIdx) => (
                <Card
                  key={chapterIdx}
                  title={
                    <div className="flex justify-between items-center">
                      <Input
                        placeholder="Chapter Title"
                        value={chapter.title}
                        onChange={(e) =>
                          updateChapterTitle(
                            sectionIdx,
                            chapterIdx,
                            e.target.value
                          )
                        }
                        style={{ width: 250 }}
                      />
                      <Button
                        icon={
                          activePanels[sectionIdx]?.[
                            `chapter-${chapterIdx}`
                          ] ? (
                            <UpOutlined />
                          ) : (
                            <DownOutlined />
                          )
                        }
                        onClick={() =>
                          togglePanel(sectionIdx, `chapter-${chapterIdx}`)
                        }
                      />
                    </div>
                  }
                >
                  <Collapse
                    activeKey={
                      activePanels[sectionIdx]?.[`chapter-${chapterIdx}`]
                        ? "1"
                        : ""
                    }
                  >
                    <Panel key="1">
                      <div className="space-y-4">
                        <h3>Content:</h3>
                        {chapter.content.map((content, contentIdx) => (
                          <Card
                            key={contentIdx}
                            size="small"
                            className="mb-2"
                            title={
                              <Space>
                                <Input
                                  placeholder="Content Title"
                                  value={content.title}
                                  onChange={(e) =>
                                    updateContent(
                                      sectionIdx,
                                      chapterIdx,
                                      contentIdx,
                                      "title",
                                      e.target.value
                                    )
                                  }
                                  style={{ width: 200 }}
                                />
                              </Space>
                            }
                            extra={
                              <Tooltip title="Delete Content">
                                <Button
                                  icon={<DeleteOutlined />}
                                  danger
                                  size="small"
                                  onClick={() =>
                                    removeContent(
                                      sectionIdx,
                                      chapterIdx,
                                      contentIdx
                                    )
                                  }
                                />
                              </Tooltip>
                            }
                          >
                            <Space
                              direction="vertical"
                              style={{ width: "100%" }}
                            >
                              {(content.type === "video" ||
                                content.type === "text" ||
                                content.type === "assignment") && (
                                <Upload
                                  beforeUpload={(file) => {
                                    updateContent(
                                      sectionIdx,
                                      chapterIdx,
                                      contentIdx,
                                      "fileUrl",
                                      file.name
                                    );
                                    return false;
                                  }}
                                  showUploadList={false}
                                >
                                  <Button>
                                    Upload{" "}
                                    {content.type === "video"
                                      ? "Video"
                                      : "File"}
                                  </Button>
                                  {content.fileUrl && (
                                    <span className="ml-2">
                                      {content.fileUrl}
                                    </span>
                                  )}
                                </Upload>
                              )}
                              {content.type === "quiz" && (
                                <QuizSectionBuilder
                                  quizData={content.quizData}
                                  onChange={(data) =>
                                    updateContent(
                                      sectionIdx,
                                      chapterIdx,
                                      contentIdx,
                                      "quizData",
                                      data
                                    )
                                  }
                                />
                              )}
                              {(content.type === "video" ||
                                content.type === "text") && (
                                <Input
                                  placeholder="Duration (e.g. 5:00)"
                                  value={content.duration}
                                  onChange={(e) =>
                                    updateContent(
                                      sectionIdx,
                                      chapterIdx,
                                      contentIdx,
                                      "duration",
                                      e.target.value
                                    )
                                  }
                                  style={{ width: 150 }}
                                />
                              )}
                            </Space>
                          </Card>
                        ))}
                        <Select
                          placeholder="Add Content"
                          style={{ width: 180 }}
                          onChange={(type) =>
                            addContent(sectionIdx, chapterIdx, type)
                          }
                          value={undefined}
                          options={lectureTypes}
                        />
                      </div>
                    </Panel>
                  </Collapse>
                </Card>
              ))}

              {/* Exercise */}
              <Card
                title={
                  <div className="flex justify-between items-center">
                    <span>Exercise</span>
                    <Button
                      icon={
                        activePanels[sectionIdx]?.["exercise"] ? (
                          <UpOutlined />
                        ) : (
                          <DownOutlined />
                        )
                      }
                      onClick={() => togglePanel(sectionIdx, "exercise")}
                    />
                  </div>
                }
              >
                <Collapse
                  activeKey={activePanels[sectionIdx]?.["exercise"] ? "1" : ""}
                >
                  <Panel key="1">
                    <Space direction="vertical" style={{ width: "100%" }}>
                      <Input
                        placeholder="Exercise Title"
                        value={section.Exercise.title}
                        onChange={(e) =>
                          updateExercise(sectionIdx, "title", e.target.value)
                        }
                        style={{ width: 300 }}
                      />
                      <Input.TextArea
                        placeholder="Exercise Description"
                        value={section.Exercise.description}
                        onChange={(e) =>
                          updateExercise(
                            sectionIdx,
                            "description",
                            e.target.value
                          )
                        }
                        rows={3}
                      />
                      <Input
                        type="number"
                        placeholder="Duration (minutes)"
                        value={section.Exercise.duration}
                        onChange={(e) =>
                          updateExercise(
                            sectionIdx,
                            "duration",
                            parseInt(e.target.value) || 0
                          )
                        }
                        style={{ width: 200 }}
                      />
                      <Upload
                        beforeUpload={(file) => {
                          updateExercise(sectionIdx, "fileUrl", file.name);
                          return false;
                        }}
                        showUploadList={false}
                      >
                        <Button>Upload Exercise File</Button>
                        {section.Exercise.fileUrl && (
                          <span className="ml-2">
                            {section.Exercise.fileUrl}
                          </span>
                        )}
                      </Upload>
                    </Space>
                  </Panel>
                </Collapse>
              </Card>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
