import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.js"; // Trang CVHT
import UserLayout from "layouts/User.js"; // Trang CVHT
import Login from "./Login.js";
import PrivateRoute from "./components/PrivateRouter/PrivateRouter.js";


const root = ReactDOM.createRoot(document.getElementById("root"));

// // Giả sử bạn lấy vai trò người dùng từ localStorage
// const getUserRole = () => {
//   return localStorage.getItem("role"); // Giá trị: "cvht" hoặc "user"
// };

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      
      <Route
        path="/admin/*"
        element={
          <PrivateRoute allowedRoles={["ADMIN"]}>
            <AdminLayout />
          </PrivateRoute>
        }
      />
      <Route
        path="/user/*"
        element={
          <PrivateRoute allowedRoles={["USER"]}>
            <UserLayout />
          </PrivateRoute>
        }
      />
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  </BrowserRouter>
);
