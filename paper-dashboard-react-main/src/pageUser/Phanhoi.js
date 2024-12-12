import React, { useState } from "react";
import { Button, Card, CardBody, Col, Form, FormGroup, Label, Input, Row, Alert } from "reactstrap";
import axios from "axios";
import Header from "components/User/Navbars/DemoNavbar";

function PhanHoiSinhVien() {
  const mssv = localStorage.getItem("fullName"); // Lấy MSSV từ localStorage
  const [feedback, setFeedback] = useState({
    cauhoi: "", // Nội dung phản hồi
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!feedback.cauhoi) {
      setErrorMessage("Vui lòng điền nội dung phản hồi.");
      return;
    }

    // Tạo payload phản hồi kèm MSSV
    const payload = {
      mssv: mssv, // Thêm MSSV
      cauhoi: feedback.cauhoi,
    };
    console.log(payload);
    axios.post(`https://localhost:7166/api/Phanhoi/send`, {
      mssv: mssv,
      cauhoi: feedback.cauhoi,
    })
      .then((response) => {
        setSuccessMessage("Phản hồi của bạn đã được gửi thành công!");
        setFeedback({ cauhoi: "" }); // Reset form
        setTimeout(() => setSuccessMessage(""), 3000);
      })
      .catch((error) => {
        setErrorMessage("Có lỗi xảy ra. Vui lòng thử lại.");
        setTimeout(() => setErrorMessage(""), 3000);
      });
  };

  return (
    <>
      <Header />
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                {successMessage && <Alert color="success">{successMessage}</Alert>}
                {errorMessage && <Alert color="danger">{errorMessage}</Alert>}

                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="cauhoi">Nội dung phản hồi</Label>
                    <Input
                      type="textarea"
                      name="cauhoi"
                      id="cauhoi"
                      placeholder="Nhập nội dung phản hồi của bạn"
                      value={feedback.cauhoi}
                      onChange={handleChange}
                      required
                      rows="5"
                    />
                  </FormGroup>

                  <Button color="primary" type="submit">
                    Gửi phản hồi
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default PhanHoiSinhVien;
