"use client";
import { Form, Select, Input, Button, Spin, Alert } from "antd";
import { useEffect, useState } from "react";

export default function UserForm({ form, onSubmit, loading, isUpdating }) {
  const [roles] = useState(["admin", "supervisor", "employee"]);
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isUpdating) {
      fetchAvailableUsers();
    }
  }, [isUpdating]);

  const fetchAvailableUsers = async () => {
    try {
      setLoadingUsers(true);
      const response = await fetch("/api/userRoute");
      const data = await response.json();
      setUsers(data.users || []);
    } catch (err) {
      setError("Failed to load available users");
    } finally {
      setLoadingUsers(false);
    }
  };

  return (
    <Form form={form} layout="vertical" onFinish={onSubmit}>
      {!isUpdating ? (
        <Form.Item
          label="Select User"
          name="userId"
          rules={[{ required: true, message: "Please select a user!" }]}
        >
          <Select
            showSearch
            placeholder="Search users"
            optionFilterProp="children"
            loading={loadingUsers}
            notFoundContent={
              loadingUsers ? (
                <Spin size="small" />
              ) : error ? (
                <Alert message={error} type="error" />
              ) : (
                "No users found"
              )
            }
          >
            {users.map((user) => (
              <Select.Option key={user.id} value={user.id}>
                {user.name} ({user.email})
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      ) : (
        <>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input the name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input the email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input />
          </Form.Item>
        </>
      )}

      <Form.Item
        label="Role"
        name="role"
        rules={[{ required: true, message: "Please select a role!" }]}
      >
        <Select placeholder="Select role">
          {roles.map((role) => (
            <Select.Option key={role} value={role}>
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading} block>
          {isUpdating ? "Update User" : "Add User"}
        </Button>
      </Form.Item>
    </Form>
  );
}
