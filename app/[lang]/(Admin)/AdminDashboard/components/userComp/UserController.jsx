"use client";
import { useState, useEffect } from "react";
import { Modal, Form, message } from "antd";
import UserForm from "./UserForm";
import UserTable from "./UserTable";

export default function UserController() {
  const [form] = Form.useForm();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/userRoute"); // <-- FIXED
      const data = await response.json();
      // Remove unwanted fields from each user object
      data.users = data.users.map(
        ({ updatedAt, image, createdAt, emailVerified, ...rest }) => rest
      );
      setUsers(data.users);
      console.log("Fetched users:----", data.users);
    } catch (error) {
      message.error("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (values) => {
    values.email = "huzeyfa7774@gmail.com";
    values.name = "huz kasim";
    values.role = "admin";
    values.emailVerified = true;
    delete values.phone; // Ensure id is not sent in the request
    delete values.userId;
    try {
      setLoading(true);
      const response = await fetch("/api/userRoute", {
        // <-- FIXED
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userData: values }),
      });

      if (!response.ok) throw new Error("Failed to create user");

      message.success("User created successfully");
      fetchUsers();
      setIsModalOpen(false);
      form.resetFields();
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (values) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/users/${currentUser.id}`, {
        // <-- FIXED
        method: "PUT", // Use PUT for full update, PATCH for partial
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userData: values }),
      });

      if (!response.ok) throw new Error("Failed to update user");

      message.success("User updated successfully");
      fetchUsers();
      setIsModalOpen(false);
      form.resetFields();
      setCurrentUser(null);
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (userId) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/users/${userId}`, {
        // <-- FIXED
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete user");

      message.success("User deleted successfully");
      fetchUsers();
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
    form.setFieldsValue({
      name: user.name,
      email: user.email,
      role: user.role,
    });
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
    setCurrentUser(null);
  };

  const handleFormSubmit = (values) => {
    if (currentUser) {
      handleUpdate(values);
    } else {
      handleCreate(values);
    }
  };

  return (
    <div>
      <UserTable
        data={users}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAdd={showModal}
      />

      <Modal
        title={currentUser ? "Edit User" : "Add New User"}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        destroyOnHidden
      >
        <UserForm
          form={form}
          onSubmit={handleFormSubmit}
          loading={loading}
          isUpdating={!!currentUser}
        />
      </Modal>
    </div>
  );
}
