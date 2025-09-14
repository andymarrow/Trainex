"use client";
import React, { useMemo } from "react";
import { Table, Button, Popconfirm } from "antd";

const DynamicTable = ({
  data = [],
  tableActions = [],
  loading = false,
  customColumns = null,
  scroll = { y: 440 },
  rowKey = "id",
}) => {
  const columns = useMemo(() => {
    if (customColumns) return customColumns;

    if (data.length === 0) return [];

    const keys = Object.keys(data[0]).filter((key) =>
      data.some((item) => item[key] != null)
    );

    return keys.map((key) => ({
      title: key.charAt(0).toUpperCase() + key.slice(1),
      dataIndex: key,
      key: key,
      ellipsis: true,
      render: (text) => {
        if (text == null || text === false) return "-";
        return (
          <div className="max-w-xs truncate" title={String(text)}>
            {text}
          </div>
        );
      },
    }));
  }, [data, customColumns]);

  const columnsWithActions = useMemo(() => {
    if (!columns) return [];

    if (tableActions.length > 0) {
      return [
        ...columns,
        {
          title: "Actions",
          key: "actions",
          width: 200,
          fixed: "right",
          render: (_, record) => (
            <div className="flex flex-wrap gap-1">
              {tableActions.map((action, index) =>
                action.confirm ? (
                  <Popconfirm
                    key={`${action.label}-${index}`}
                    title={action.confirmMessage}
                    onConfirm={() => action.onClick(record)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button
                      type={action.type || "link"}
                      danger={action.danger}
                      icon={action.icon}
                      size="small"
                    >
                      {action.label}
                    </Button>
                  </Popconfirm>
                ) : (
                  <Button
                    key={`${action.label}-${index}`}
                    type={action.type || "link"}
                    danger={action.danger}
                    onClick={() => action.onClick(record)}
                    icon={action.icon}
                    size="small"
                  >
                    {action.label}
                  </Button>
                )
              )}
            </div>
          ),
        },
      ];
    }
    return columns;
  }, [columns, tableActions]);

  return (
    <Table
      bordered
      size="middle"
      columns={columnsWithActions}
      dataSource={data.filter((item) => item)}
      loading={loading}
      rowKey={rowKey}
      scroll={{ ...scroll, x: "max-content" }}
      pagination={{
        pageSize: 10,
        showSizeChanger: true,
        pageSizeOptions: ["10", "20", "50", "100"],
      }}
      className="shadow-sm"
    />
  );
};

export default DynamicTable;
