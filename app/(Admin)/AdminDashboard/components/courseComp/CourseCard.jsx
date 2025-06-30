"use client";

import React from "react";
import { Card, Button, Popconfirm, Tag, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";

const CourseCard = ({ course, onEdit, onDelete, onView }) => {
  const { id, title, description, category, level, imageUrl, createdAt } =
    course;

  return (
    <Card
      hoverable
      className="h-full shadow-md hover:shadow-lg transition-all"
      cover={
        <div className="h-40 bg-gray-200 flex items-center justify-center overflow-hidden">
          {imageUrl ? (
            <img
              alt={title}
              src={imageUrl}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="text-gray-400 text-lg">No Image</div>
          )}
        </div>
      }
      actions={[
        <Button
          key="view"
          type="text"
          icon={<EyeOutlined />}
          onClick={() => onView(course)}
          title="View Details"
        />,
        <Button
          key="edit"
          type="text"
          icon={<EditOutlined />}
          onClick={() => onEdit(course)}
          title="Edit Course"
        />,
        <Popconfirm
          key="delete"
          title="Delete this course?"
          description="Are you sure to delete this course? This action cannot be undone."
          onConfirm={() => onDelete(id)}
          okText="Yes"
          cancelText="No"
        >
          <Button
            type="text"
            icon={<DeleteOutlined />}
            danger
            title="Delete Course"
          />
        </Popconfirm>,
      ]}
    >
      <div className="flex flex-col h-full">
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-base font-bold line-clamp-1" title={title}>
              {title}
            </h3>
            <Tag
              color={
                level === "beginner"
                  ? "green"
                  : level === "intermediate"
                  ? "blue"
                  : "red"
              }
            >
              {level}
            </Tag>
          </div>

          <div className="mb-2">
            <Tag color="geekblue" className="capitalize">
              {category}
            </Tag>
          </div>

          <p
            className="text-gray-600 text-sm line-clamp-2 mb-3"
            title={description}
          >
            {description}
          </p>
        </div>

        <div className="text-xs text-gray-400 mt-auto">
          Created: {new Date(createdAt).toLocaleDateString()}
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
