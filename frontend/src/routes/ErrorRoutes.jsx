import React from "react";
import { Routes, Route } from "react-router-dom";
// Error pages
import NotFound from "../pages/error/404";
import ServerError from "../pages/error/500";

const ErrorRoutes = () => {
  return (
    <Routes>
      <Route path="/500" element={<ServerError />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ErrorRoutes;
