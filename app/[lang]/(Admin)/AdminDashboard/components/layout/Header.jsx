"use client";
import { Layout, Button, Avatar } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const { Header } = Layout;

export default function AdminHeader() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    router.push("/login");
  };

  return (
    <Header
      className="bg-white flex justify-end items-center shadow-sm"
      style={{ padding: "0 24px" }}
    >
      <div className="flex items-center">
        <Avatar className="mr-2 bg-blue-500">A</Avatar>
        <span className="mr-4">Admin User</span>
        <Button type="text" icon={<LogoutOutlined />} onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </Header>
  );
}
