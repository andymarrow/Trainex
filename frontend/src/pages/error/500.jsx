import React from "react";
import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

const ServerError = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong. Please try again later."
      extra={
        <Button type="primary" onClick={() => navigate("/")}>
          Back to Home
        </Button>
      }
    />
  );
};

export default ServerError;
