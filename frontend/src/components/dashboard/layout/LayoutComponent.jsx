import React from "react";
import { Layout } from "antd";
import Header from "./HeaderLayout";
import BreadcrumbComp from "../breadcrumb/Breadcrumb"; // Adjust the import path accordingly
import "./layout.css";

// Import all siders from layout/siders
import AdminSider from "./SiderAdmin";
import SuperAdminSider from "./SiderSuperAdmin";

const { Content, Sider } = Layout;

const LayoutComponent = ({ children }) => {
  const userRole = localStorage.getItem("role");
  let SiderComponent;
  if (userRole) {
    switch (userRole) {
      case "admin ":
        SiderComponent = <AdminSider />;
        break;
      case "superAdmin":
        SiderComponent = <SuperAdminSider />;
        break;
      default:
        SiderComponent = null;
    }
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {SiderComponent}
      <Layout>
        <Header />

        <Layout className="layout-content">
          <BreadcrumbComp />
          <Content
            style={{
              margin: "24px 16px 0",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
