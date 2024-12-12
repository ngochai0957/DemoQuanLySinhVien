import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";  // Sử dụng axios cho việc gửi HTTP request
import "./assets/css/Login.css";

const Login = () => {
  const navigate = useNavigate();

  // State lưu email và password nhập vào
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Để hiển thị thông báo lỗi

  const handleLogin = async () => {
    try {
      // Gửi yêu cầu POST tới backend để xác thực người dùng
      const response = await axios.post("https://localhost:7166/api/Auth/login", {
        username: email,
        password: password,
      });
      const role = response.data.roleName;
      console.log(response.data);
// Nếu đăng nhập thành công
if (role === "ADMIN") {
  // Lưu thông tin role vào localStorage
  localStorage.setItem("role", response.data.roleName);
  localStorage.setItem("fullName", response.data.fullName);
  localStorage.setItem("roleId", response.data.roleID);
  navigate("/admin/dashboard");
  
}// Nếu đăng nhập thành công
else if (role === "USER") {
  // Lưu thông tin role vào localStorage
  localStorage.setItem("role", response.data.roleName);
  localStorage.setItem("fullName", response.data.fullName);
  localStorage.setItem("roleId", response.data.roleID);
  navigate("/user/dashboard");
  
}
    

    } catch (error) {
      // Nếu đăng nhập thất bại
      console.error("Login error:", error);
      setErrorMessage("Tên đăng nhập hoặc mật khẩu không đúng.");
    }
  };

  return (
    <div
      className="content"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f3ef",
      }}
    >
      <Card style={{ width: "400px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}>
        <CardBody>
          <Form>
            <FormGroup>
              <label>Email</label>
              <Input
                type="email"
                placeholder="Nhập email của bạn"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Cập nhật email
              />
            </FormGroup>
            <FormGroup>
              <label>Mật khẩu</label>
              <Input
                type="password"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Cập nhật mật khẩu
              />
            </FormGroup>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <Button color="primary" block onClick={handleLogin}>
              Đăng nhập
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
