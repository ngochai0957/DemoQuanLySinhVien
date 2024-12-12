import Header from "components/User/Navbars/DemoNavbar";
import React, { useState } from "react";
import { Button, Table, Card, CardBody, Col, Row } from "reactstrap";

function Dangkylaodong() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      ngaylaodong: "08-12-2024",
      buoi: "Sáng",
      lop: "10A1",
      thoigianbatdau: "08:00",
      thoigianketthuc: "11:30",
    },
    {
      id: 2,
      ngaylaodong: "08-12-2024",
      buoi: "Chiều",
      lop: "10A2",
      thoigianbatdau: "13:30",
      thoigianketthuc: "17:00",
    },
  ]);

  const handleRegister = (task) => {
    alert(`Bạn đã đăng ký buổi lao động: ${task.buoi} (${task.lop}) vào ngày ${task.ngaylaodong}`);
  };

  return (
    <>
    <Header/>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <Table responsive className="text-center">
                  <thead className="text-primary">
                    <tr>
                      <th style={{ width: "150px" }}>Ngày lao động</th>
                      <th style={{ width: "100px" }}>Buổi</th>
                      <th style={{ width: "100px" }}>Lớp</th>
                      <th style={{ width: "150px" }}>Thời gian bắt đầu</th>
                      <th style={{ width: "150px" }}>Thời gian kết thúc</th>
                      <th style={{ width: "150px" }}>Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tasks.length > 0 ? (
                      tasks.map((task) => (
                        <tr key={task.id}>
                          <td>{task.ngaylaodong}</td>
                          <td>{task.buoi}</td>
                          <td>{task.lop}</td>
                          <td>{task.thoigianbatdau}</td>
                          <td>{task.thoigianketthuc}</td>
                          <td>
                            <Button
                              color="primary"
                              size="sm"
                              onClick={() => handleRegister(task)}
                            >
                              Đăng ký
                            </Button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" style={{ textAlign: "center", color: "gray" }}>
                          Không có lịch lao động nào.
                        </td>
                      </tr>
                    )}
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

export default Dangkylaodong;
