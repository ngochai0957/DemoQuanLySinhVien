// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button, Card, CardBody, Form, FormGroup, Input } from "reactstrap";
// import "../assets/css/Login.css";

// const Login = () => {
//   const navigate = useNavigate();

//   // State lưu email và password nhập vào
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     // Dữ liệu mẫu: Thay thế bằng API thực tế
//     const users = [
//       { email: "cvht@example.com", password: "123456", role: "cvht" },
//       { email: "user@example.com", password: "123456", role: "user" },
//     ];

//     // Tìm người dùng
//     const user = users.find((u) => u.email === email && u.password === password);

//     if (user) {
//       // Lưu vai trò vào localStorage
//       localStorage.setItem("role", user.role);

//       // Điều hướng theo role
//       if (user.role === "cvht") {
//         navigate("/admin/dashboard");
//       } else if (user.role === "user") {
//         navigate("/user/dashboard");
//       }
//     } else {
//       alert("Sai email hoặc mật khẩu!");
//     }
//   };

//   return (
//     <div
//       className="content"
//       style={{
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "#f4f3ef",
//       }}
//     >
//       <Card style={{ width: "400px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}>
//         <CardBody>
//           <Form>
//             <FormGroup>
//               <label>Email</label>
//               <Input
//                 type="email"
//                 placeholder="Nhập email của bạn"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)} // Cập nhật email
//               />
//             </FormGroup>
//             <FormGroup>
//               <label>Mật khẩu</label>
//               <Input
//                 type="password"
//                 placeholder="Nhập mật khẩu"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)} // Cập nhật mật khẩu
//               />
//             </FormGroup>
//             <Button color="primary" block onClick={handleLogin}>
//               Đăng nhập
//             </Button>
//           </Form>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default Login;
