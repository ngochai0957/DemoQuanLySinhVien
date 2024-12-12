import React, { useState } from "react";
import { Collapse, Card, CardBody,CardFooter,
    CardTitle,
    Row,
    Col, Button, Table } from "reactstrap";
    import DemoNavbar from "components/User/Navbars/DemoNavbar.js";
const KhungChuongTrinh = () => {
  const [data, setData] = useState({
    "Ngoại ngữ": [{ id: 1, name: "Tiếng Anh", credit: 3 }, { id: 2, name: "Tiếng Pháp", credit: 2 }],
    "Giáo dục quốc phòng": [{ id: 1, name: "Giáo dục quốc phòng 1", credit: 2 }],
    "Giáo dục thể chất": [{ id: 1, name: "Thể dục 1", credit: 1 }],
    "Đại cương chung": [{ id: 1, name: "Toán cao cấp", credit: 4 }],
    "Kiến thức cơ sở nhóm ngành": [{ id: 1, name: "Cơ học", credit: 3 }],
    "Kiến thức chuyên ngành": [{ id: 1, name: "Lập trình C", credit: 3 }],
    "Thực hành thực tập nghề nghiệp": [{ id: 1, name: "Thực tập kỹ thuật", credit: 2 }],
    "Khóa luận tốt nghiệp": [{ id: 1, name: "Khóa luận 1", credit: 6 }]
  });

  const [collapseState, setCollapseState] = useState({});

  const toggleCollapse = (category) => {
    setCollapseState((prevState) => ({
      ...prevState,
      [category]: !prevState[category]
    }));
  };

  return (
    <>
    <DemoNavbar />
    <div className="content">
    <Row className="justify-content-center">
  <Col lg="3" md="6" sm="6">
    <Card className="card-stats">
      <CardBody>
        <Row>
          <Col md="4" xs="5">
            <div className="icon-big text-center icon-warning">
              <i className="nc-icon nc-single-02 text-warning" />
            </div>
          </Col>
          <Col md="8" xs="7">
            <div className="numbers">
              <p className="card-category">Tổng số</p>
              <CardTitle tag="p">40</CardTitle>
              <p />
            </div>
          </Col>
        </Row>
      </CardBody>
      <CardFooter>
        <hr />
        <div className="stats">
          <i className="fas fa-arrow-right" /> Xem chi tiết
        </div>
      </CardFooter>
    </Card>
  </Col>

  <Col lg="3" md="6" sm="6">
    <Card className="card-stats">
      <CardBody>
        <Row>
          <Col md="4" xs="5">
            <div className="icon-big text-center icon-danger">
              <i className="nc-icon nc-bag-16 text-danger" />
            </div>
          </Col>
          <Col md="8" xs="7">
            <div className="numbers">
              <p className="card-category">Đang hoạt động</p>
              <CardTitle tag="p">15</CardTitle>
              <p />
            </div>
          </Col>
        </Row>
      </CardBody>
      <CardFooter>
        <hr />
        <div className="stats">
          <i className="fas fa-arrow-right" /> Xem chi tiết
        </div>
      </CardFooter>
    </Card>
  </Col>

  <Col lg="3" md="6" sm="6">
    <Card className="card-stats">
      <CardBody>
        <Row>
          <Col md="4" xs="5">
            <div className="icon-big text-center icon-success">
              <i className="nc-icon nc-money-coins text-success" />
            </div>
          </Col>
          <Col md="8" xs="7">
            <div className="numbers">
              <p className="card-category">Đã hoàn thành</p>
              <CardTitle tag="p">25</CardTitle>
              <p />
            </div>
          </Col>
        </Row>
      </CardBody>
      <CardFooter>
        <hr />
        <div className="stats">
          <i className="fas fa-arrow-right" /> Xem chi tiết
        </div>
      </CardFooter>
    </Card>
  </Col>
</Row>

        {Object.keys(data).map((category, index) => (
        <Col key={index} className="mb-3">
          <Card>
            <Button color="primary" onClick={() => toggleCollapse(category)} block>
              Khối kiến thức: {category}
            </Button>
            <Collapse isOpen={collapseState[category]}>
              <CardBody>
                <Table striped>
                  <thead>
                    <tr>
                      <th>Mã học phần</th>
                      <th>Tên học phần</th>
                      <th>Số tín chỉ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data[category].map((course) => (
                      <tr key={course.id}>
                        <td>{course.id}</td>
                        <td>{course.name}</td>
                        <td>{course.credit}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Collapse>
          </Card>
        </Col>
      ))}
    </div>
    </>
  );
};

export default KhungChuongTrinh;
