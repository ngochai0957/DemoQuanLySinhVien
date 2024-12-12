import React, { useState, useEffect } from "react";
import { Button, Card, CardBody, Col, Form, FormGroup, Label, Input, Row, Alert, Table, CardHeader,CardTitle } from "reactstrap";
import axios from "axios";
import Header from "components/Admin/Navbars/DemoNavbar";
function QuanLyPhanHoi() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [name, setName] = useState();

  useEffect(() => {
    axios
      .get("https://localhost:7166/api/Phanhoi/unanswered")
      .then((response) => {
        console.log("Danh sách phản hồi:", response.data); // Kiểm tra phản hồi từ API
        const feedbacks = response.data;
  
        const fetchNames = feedbacks.map((feedback) =>
          axios
            .get(`https://localhost:7166/api/SinhVien/${feedback.mssv}`)
            .then((res) => {
              console.log(`Tên sinh viên với MSSV ${feedback.mssv}:`, res.data.hoten);
              return { ...feedback, hoten: res.data.hoten || "Không xác định" };
            })
            .catch((error) => {
              console.error(`Lỗi khi lấy tên cho MSSV ${feedback.mssv}:`, error);
              return { ...feedback, hoten: "Không tìm thấy" };
            })
        );
  
        Promise.all(fetchNames).then((updatedFeedbacks) => {
          console.log("Danh sách phản hồi đã cập nhật:", updatedFeedbacks); // Kiểm tra kết quả cuối
          setFeedbackList(updatedFeedbacks);
        });
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra khi lấy phản hồi:", error);
      });
  }, []);
  
  

  const handleDelete = (id) => {
    // Xóa phản hồi
    axios
      .delete(`https://localhost:7166/api/Phanhoi/unanswered/${id}`)
      .then((response) => {
        setFeedbackList(feedbackList.filter((feedback) => feedback.id !== id));
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra khi xóa phản hồi:", error);
      });
  };

  return (
    <>
    <Header/>
    <div className="content">
    <Row>
      <Col md="12">
      <Row>
      <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Edit Profile</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Company (disabled)</label>
                        <Input
                          defaultValue="Creative Code Inc."
                          disabled
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="3">
                      <FormGroup>
                        <label>Username</label>
                        <Input
                          defaultValue="michael23"
                          placeholder="Username"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input placeholder="Email" type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          defaultValue="Chet"
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          defaultValue="Faker"
                          placeholder="Last Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Address</label>
                        <Input
                          defaultValue="Melbourne, Australia"
                          placeholder="Home Address"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>City</label>
                        <Input
                          defaultValue="Melbourne"
                          placeholder="City"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>Country</label>
                        <Input
                          defaultValue="Australia"
                          placeholder="Country"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Postal Code</label>
                        <Input placeholder="ZIP Code" type="number" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>About Me</label>
                        
                
                <Form>
                  <FormGroup>
                    
                    <Input
                      type="textarea"
                      name="cauhoi"
                      id="cauhoi"
                      placeholder="Nhập nội dung phản hồi của bạn"
                      value=""
                      
                      required
                      rows="5"
                    />
                  </FormGroup>
                </Form>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                      >
                        Gửi thông tin phản hồi
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>

          </Row>
      </Col>
        <Col md="12">
          <Card>
            <div className="card-header">Quản lý phản hồi từ sinh viên</div>
            <CardBody>
              <Table responsive>
                <thead>
                  <tr className="text-center text-primary">
                    <th>Họ tên</th>
                    <th>Nội dung phản hồi</th>
                    <th>Thời gian gửi</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
  {feedbackList.map((feedback) => (
    <tr key={feedback.id} className="text-center">
      <td>{feedback.hoten}</td> {/* Gán tên sinh viên */}
      <td>{feedback.cauhoi}</td>
      <td>{new Date(feedback.ngaygui).toLocaleString()}</td>
      <td>
        <Button color="danger" onClick={() => handleDelete(feedback.id)}>
          Xóa
        </Button>
      </td>
    </tr>
  ))}
</tbody>


              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
    </>
  );
}

export default QuanLyPhanHoi;
