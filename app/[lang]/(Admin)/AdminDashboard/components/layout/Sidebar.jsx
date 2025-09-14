"use client";
import { Layout, Menu } from "antd";
import { usePathname, useRouter } from "next/navigation";
import {
  DashboardOutlined,
  UserOutlined,
  BookOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

export default function AdminSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    {
      key: "/AdminDashboard/pages/dashboard",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: "/AdminDashboard/pages/user",
      icon: <UserOutlined />,
      label: "Users",
    },
    {
      key: "/AdminDashboard/pages/course",
      icon: <BookOutlined />,
      label: "Courses",
    },
    {
      key: "/AdminDashboard/pages/add-course",
      icon: <BookOutlined />,
      label: "AddCourses",
    },
    {
      key: "/admin/settings",
      icon: <SettingOutlined />,
      label: "Settings",
    },
  ];

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      theme="light"
      style={{ height: "100vh", position: "fixed", left: 0 }}
    >
      <div className="h-16 flex items-center justify-center">
        <h1 className="text-xl font-bold">Admin Panel</h1>
      </div>
      <Menu
        theme="light"
        mode="inline"
        selectedKeys={[pathname]}
        items={menuItems}
        onClick={({ key }) => router.push(key)}
      />
    </Sider>
  );
}
