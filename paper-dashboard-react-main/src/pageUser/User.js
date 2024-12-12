import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  CardTitle,
  CardFooter,
  Col,
} from "reactstrap";

const User = () => {
  const mssv = localStorage.getItem("fullName"); // Lấy MSSV từ localStorage
  const [student, setStudent] = useState(null); // Lưu thông tin sinh viên
  const [error, setError] = useState(""); // Xử lý lỗi nếu có

  useEffect(() => {
    // Hàm gọi API để lấy thông tin sinh viên
    const fetchStudent = async () => {
      try {
        setError(""); // Xóa lỗi trước đó
        const response = await axios.get(`https://localhost:7166/api/SinhVien/${mssv}`);
        console.log("API response:", response.data); // Debug thông tin trả về
        setStudent(response.data); // Gán dữ liệu vào state
      } catch (err) {
        console.error("Error fetching student:", err);
        setError("Không tìm thấy sinh viên hoặc xảy ra lỗi.");
      }
    };

    if (mssv) {
      fetchStudent(); // Gọi API khi có MSSV
    }
  }, [mssv]);

  if (!student) {
    return error ? <p>{error}</p> : <p>Đang tải dữ liệu...</p>;
  }

  return (
    <div className="content" style={{ paddingBottom: "0" }}>
      <Row>
          <Col md="4">
            <Card className="card-user">
              <div className="image">
                <img alt="..." src={require("assets/img/damir-bosnjak.jpg")} />
              </div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/mike.jpg")}
                    />
                    <h5 className="title">Chet Faker</h5>
                  </a>
                  <p className="description">@chetfaker</p>
                </div>
                <p className="description text-center">
                  "I like the way you work it <br />
                  No diggity <br />I wanna bag it up"
                </p>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="button-container">
                  <Row>
                    <Col className="ml-auto" lg="3" md="6" xs="6">
                      <h5>
                        12 <br />
                        <small>Files</small>
                      </h5>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                      <h5>
                        2GB <br />
                        <small>Used</small>
                      </h5>
                    </Col>
                    <Col className="mr-auto" lg="3">
                      <h5>
                        24,6$ <br />
                        <small>Spent</small>
                      </h5>
                    </Col>
                  </Row>
                </div>
              </CardFooter>
            </Card>


        </Col>
        <Col md="8">
          <Card className="card-user">
            <CardHeader>
              <CardTitle tag="h5" className="text-primary">
                THÔNG TIN CÁ NHÂN
              </CardTitle>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col md="4">
                    <FormGroup>
                      <label>MÃ SỐ SINH VIÊN</label>
                      <Input value={student.mssv || ""} disabled />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup>
                      <label>LỚP</label>
                      <Input value={student.lop || "Không có dữ liệu"} disabled />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup>
                      <label>TRẠNG THÁI</label>
                      <Input value={student.trangthai || "Không có dữ liệu"} disabled />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label>CHUYÊN NGÀNH</label>
                      <Input value="KHOA HỌC MÁY TÍNH" disabled />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label>KHOA</label>
                      <Input value="CÔNG NGHỆ VÀ KỸ THUẬT" disabled />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="4">
                    <FormGroup>
                      <label>HỌ TÊN</label>
                      <Input value={student.fullName || "Không có dữ liệu"} disabled />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup>
                      <label>EMAIL</label>
                      <Input value={student.email || "Không có dữ liệu"} disabled />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup>
                      <label>SỐ ĐIỆN THOẠI</label>
                      <Input value={student.sdt || "Không có dữ liệu"} disabled />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <div className="update ml-auto mr-auto">
                    <Button className="btn-round" color="primary" type="submit">
                      Cập nhật thông tin
                    </Button>
                  </div>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default User;
