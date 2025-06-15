import React, { useEffect, useState } from "react";
import { Layout, Button, Popconfirm, message } from "antd";
import { useNavigate } from "react-router-dom";

import { MenuOutlined, LogoutOutlined } from "@ant-design/icons";
import usePost from "../../hooks/usePost";

const { Header } = Layout;

export default function HeaderComp() {
  const navigate = useNavigate();
  const [logoutLoading, setLogoutLoading] = useState(false);
  const [logoutError, setLogoutError] = useState(null);
  const [logoutRes, setLogoutRes] = useState(null);

  const { post: logout, reset: resetLogout } = usePost("auth/logout", {
    setLoading: setLogoutLoading,
    setError: setLogoutError,
    setData: setLogoutRes,
  });
  const handleConfirm = () => {
    logout();
  };

  useEffect(() => {
    console.log(logoutRes);
    if (logoutRes?.message) message[logoutRes?.status](logoutRes?.message);
    if (logoutRes?.status === "success") {
      localStorage.setItem("accessToken", "");
      window.location.reload();
    }

    resetLogout();
  }, [logoutRes]);

  useEffect(() => {
    console.log(logoutError);
    if (logoutError?.message)
      message[logoutError?.status](logoutError?.message);
    resetLogout();
  }, [logoutError]);

  return (
    <>
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        <Popconfirm
          title="Are you sure you want to logout?"
          onConfirm={handleConfirm}
          okText="Yes"
          cancelText="No"
        >
          <Button
            type="link"
            icon={<LogoutOutlined />}
            className="logout-btn"
          />
        </Popconfirm>
      </Header>
    </>
  );
}
