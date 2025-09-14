"use client";
import { Layout } from "antd";
import AdminHeader from "./Header";
import AdminSidebar from "./Sidebar";

const { Content } = Layout;

export default function AdminLayout({ children }) {
  return (
    <Layout className="min-h-screen">
      <AdminSidebar />
      <Layout style={{ marginLeft: 200 }}>
        <AdminHeader />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div className="bg-white p-6 rounded shadow">{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
}
