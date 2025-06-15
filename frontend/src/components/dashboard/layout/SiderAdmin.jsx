import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { DashboardOutlined, CarOutlined } from "@ant-design/icons";
import {
  UserOutlined,
  ShopOutlined,
  MenuOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import "../layout.css";

const { Sider } = Layout;
// const { SubMenu } = Menu;

export default function SiderComp() {
  const navigate = useNavigate();
  const location = useLocation(); // Hook to get current location
  const [collapsed, setCollapsed] = useState(window.innerWidth < 1000);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      const smallScreen = window.innerWidth < 1000;
      setIsSmallScreen(smallScreen);
      setCollapsed(smallScreen);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClick = (e) => {
    const { key } = e;
    navigate(key);
  };

  const menuItems = [
    {
      key: "/app/systemAdmin/dashboard",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: "/app/systemAdmin/manageUser",
      icon: <UserOutlined />,
      label: "Manage Users",
    },
    {
      key: "/app/systemAdmin/manageRestaurant",
      icon: <ShopOutlined />,
      label: "Manage Restaurants",
    },
    {
      key: "/app/systemAdmin/addMenus",
      icon: <MenuOutlined />,
      label: "Add Menus",
    },
    {
      key: "/app/systemAdmin/manageMenu",
      icon: <MenuOutlined />,
      label: "Manage Menus",
    },
    {
      key: "/app/systemAdmin/profile",
      icon: <ProfileOutlined />,
      label: "Profile",
    },
  ];

  return (
    <Layout className="custom-sider">
      <Sider
        style={{ minHeight: "100vh" }}
        collapsible={isSmallScreen}
        collapsed={collapsed}
        onCollapse={(collapsed) => setCollapsed(collapsed)}
        collapsedWidth={0}
        breakpoint="md"
      >
        <div className="logo">
          <i className="fa-solid fa-taxi icon-taxi"></i> HUZI
          <span className="text-primary"> MENU</span>
        </div>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]} // Set selected key based on current path
          onClick={handleMenuClick}
          items={menuItems}
          theme="dark"
        />
      </Sider>
    </Layout>
  );
}
