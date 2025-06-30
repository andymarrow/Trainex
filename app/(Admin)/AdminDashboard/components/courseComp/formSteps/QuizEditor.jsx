import React from "react";
import { Input, Select, Button, Space } from "antd";

const questionTypes = [
  { value: "truefalse", label: "True/False" },
  { value: "multiple", label: "Multiple Choice" },
  { value: "matching", label: "Matching" },
  { value: "fillblank", label: "Fill in the Blank" },
];

export default function QuizEditor({ quizData = {}, onChange }) {
  const handleTypeChange = (type) => {
    onChange({ ...quizData, type, question: "", options: [], answer: "" });
  };

  const handleFieldChange = (field, value) => {
    onChange({ ...quizData, [field]: value });
  };

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Select
        placeholder="Question Type"
        value={quizData.type}
        onChange={handleTypeChange}
        options={questionTypes}
        style={{ width: 200 }}
      />
      <Input.TextArea
        placeholder="Question"
        value={quizData.question}
        onChange={(e) => handleFieldChange("question", e.target.value)}
        rows={2}
      />
      {quizData.type === "multiple" && (
        <Space direction="vertical" style={{ width: "100%" }}>
          {(quizData.options || []).map((opt, idx) => (
            <Input
              key={idx}
              placeholder={`Option ${idx + 1}`}
              value={opt}
              onChange={(e) => {
                const newOpts = [...quizData.options];
                newOpts[idx] = e.target.value;
                handleFieldChange("options", newOpts);
              }}
              style={{ width: "100%" }}
            />
          ))}
          <Button
            onClick={() =>
              handleFieldChange("options", [...(quizData.options || []), ""])
            }
            type="dashed"
            style={{ width: "100%" }}
          >
            Add Option
          </Button>
          <Input
            placeholder="Correct Answer"
            value={quizData.answer}
            onChange={(e) => handleFieldChange("answer", e.target.value)}
            style={{ width: "100%" }}
          />
        </Space>
      )}
      {quizData.type === "truefalse" && (
        <Select
          placeholder="Correct Answer"
          value={quizData.answer}
          onChange={(val) => handleFieldChange("answer", val)}
          options={[
            { value: "true", label: "True" },
            { value: "false", label: "False" },
          ]}
          style={{ width: 200 }}
        />
      )}
      {quizData.type === "fillblank" && (
        <Input
          placeholder="Correct Answer"
          value={quizData.answer}
          onChange={(e) => handleFieldChange("answer", e.target.value)}
          style={{ width: "100%" }}
        />
      )}
      {/* You can add more UI for matching, etc. */}
    </Space>
  );
}
