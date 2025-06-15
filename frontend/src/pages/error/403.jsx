import React from "react";
import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, Your account is inactive!"
      extra={
        <Button type="primary" onClick={() => navigate("/")}>
          Back to Home
        </Button>
      }
    />
  );
};

export default NotFound;
