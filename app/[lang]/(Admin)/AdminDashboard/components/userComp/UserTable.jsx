"use client";
import React, { useState, useMemo } from "react";
import {
  Tag,
  Button,
  Input,
  Row,
  Col,
  Select,
  Popconfirm,
  Typography,
  Space,
} from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import DynamicTable from "../dynamicTable/Table";

const { Text } = Typography;

const excludedCols = [
  "id",
  "createdAt",
  "updatedAt",
  "image",
  "banned",
  "banReason",
  "banExpires",
];

export default function UserTable({ data, loading, onEdit, onDelete, onAdd }) {
  const [searchText, setSearchText] = useState("");
  const [searchColumn, setSearchColumn] = useState("name");

  const generateColumns = useMemo(() => {
    // Common columns
    const commonColumns = [
      {
        title: "User Info",
        key: "userInfo",
        render: (_, record) => (
          <Space direction="vertical" size={4}>
            <div>
              <Text strong>Name: </Text>
              <Text>{record.name || "-"}</Text>
            </div>
            <div>
              <Text strong style={{ color: "#1890ff", fontWeight: 500 }}>
                Email:
              </Text>
              <Text> {record.email || "-"}</Text>
            </div>
          </Space>
        ),
        width: 300,
      },
      {
        title: "Role",
        dataIndex: "role",
        key: "role",
        render: (role) =>
          role ? (
            <Tag
              color={
                role === "admin"
                  ? "red"
                  : role === "supervisor"
                  ? "blue"
                  : "green"
              }
              style={{
                borderRadius: 4,
                fontWeight: 500,
                minWidth: 80,
                textAlign: "center",
              }}
            >
              {role.toUpperCase()}
            </Tag>
          ) : null,
        align: "center",
      },
      {
        title: "Ban Status",
        key: "banStatus",
        render: (_, record) => {
          if (!record.banned) {
            return (
              <Tag
                color="green"
                style={{
                  borderRadius: 4,
                  padding: "4px 8px",
                  fontWeight: 500,
                }}
              >
                Active
              </Tag>
            );
          }
          return (
            <Space direction="vertical" size={4}>
              <Tag
                color="red"
                style={{
                  borderRadius: 4,
                  padding: "4px 8px",
                  fontWeight: 500,
                  marginRight: 0,
                }}
              >
                Banned
              </Tag>
              {record.banReason && (
                <div>
                  <Text type="danger" strong>
                    Reason:{" "}
                  </Text>
                  <Text>{record.banReason}</Text>
                </div>
              )}
              {record.banExpires && (
                <div>
                  <Text type="secondary" strong>
                    Expires:{" "}
                  </Text>
                  <Text>{new Date(record.banExpires).toLocaleString()}</Text>
                </div>
              )}
            </Space>
          );
        },
        width: 250,
      },
    ];

    // Dynamic columns
    const dynamicColumns = [];

    if (data?.length > 0) {
      const allKeys = Object.keys(data[0]);
      const displayKeys = allKeys.filter(
        (key) =>
          !excludedCols.includes(key) &&
          !["name", "email", "role"].includes(key) &&
          data.some((item) => item[key] != null && item[key] !== false)
      );

      displayKeys.forEach((key) => {
        dynamicColumns.push({
          title: key.charAt(0).toUpperCase() + key.slice(1),
          dataIndex: key,
          key: key,
          render: (value) => {
            if (value == null || value === false) return null;
            if (typeof value === "boolean") return value ? "Yes" : "No";
            return value;
          },
        });
      });
    }

    // Actions column
    dynamicColumns.push({
      title: "Actions",
      key: "actions",
      width: 120,
      render: (_, record) => (
        <Space size="small">
          <Button
            icon={<EditOutlined />}
            onClick={() => onEdit(record)}
            className="text-gray-700 hover:text-blue-500"
          />
          <Popconfirm
            title="Delete this user?"
            description="This action cannot be undone"
            onConfirm={() => onDelete(record.id)}
            okText="Confirm"
            cancelText="Cancel"
            placement="left"
          >
            <Button
              icon={<DeleteOutlined />}
              className="text-gray-700 hover:text-red-500"
            />
          </Popconfirm>
        </Space>
      ),
      align: "center",
    });

    return [...commonColumns, ...dynamicColumns];
  }, [data, onEdit, onDelete]);

  const filteredData = useMemo(() => {
    if (!data) return [];
    return data.filter((item) => {
      const value = item[searchColumn];
      return (
        value != null &&
        value !== false &&
        String(value).toLowerCase().includes(searchText.toLowerCase())
      );
    });
  }, [data, searchText, searchColumn]);

  const searchColumns = [
    { label: "Name", value: "name" },
    { label: "Email", value: "email" },
    { label: "Role", value: "role" },
  ].filter((col) =>
    data?.some((item) => item[col.value] != null && item[col.value] !== false)
  );

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <Row gutter={[16, 16]} className="p-4 bg-gray-50" align="middle">
        <Col xs={24} sm={12} md={12} lg={12}>
          <Input
            placeholder="Search users..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            allowClear
          />
        </Col>
        <Col xs={24} sm={8} md={8} lg={8}>
          <Select
            placeholder="Search field"
            value={searchColumn}
            onChange={setSearchColumn}
            className="w-full"
            options={searchColumns}
          />
        </Col>
        <Col xs={24} sm={4} md={4} lg={4} className="text-right">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={onAdd}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Add User
          </Button>
        </Col>
      </Row>

      <DynamicTable
        customColumns={generateColumns}
        data={filteredData}
        loading={loading}
        rowKey="id"
        pagination={{ pageSize: 10 }}
        scroll={{ x: 800 }}
        rowClassName="hover:bg-gray-50 transition-colors duration-150"
      />
    </div>
  );
}
