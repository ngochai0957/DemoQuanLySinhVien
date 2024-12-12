import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, allowedRoles }) => {
  const userRole = localStorage.getItem("role"); // Lấy role từ localStorage

  // Kiểm tra vai trò có phù hợp hay không
  if (!userRole || !allowedRoles.includes(userRole)) {
    return <Navigate to="/login" replace />;
  }

  return children; // Hiển thị nội dung bên trong nếu vai trò hợp lệ
};

export default PrivateRoute;
