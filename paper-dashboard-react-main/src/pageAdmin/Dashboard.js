import DemoNavbar from "components/Admin/Navbars/DemoNavbar.js";
import React, { useState, useEffect} from "react";
// react plugin used to create charts

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Table,
  Button,
} from "reactstrap";
import axios from "axios";
// core components
// import {
//   dashboard24HoursPerformanceChart,
//   dashboardEmailStatisticsChart,
//   dashboardNASDAQChart,
// } from "variables/charts.js";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("access"); // Quản lý trạng thái hiển thị bảng
  
  const [lichsu, setLichsu] = useState([]);

const switchTab = (tab) => {
  setActiveTab(tab);
};
useEffect(() => {
  axios
    .get("https://localhost:7166/api/LichSuDangNhap/all")
    .then((response) => {
      setLichsu(response.data);
   
    })
    .catch((error) => {
      console.error("Lỗi khi lấy dữ liệu:", error);
   
    });
}, []);


  return (
    <>
    <DemoNavbar />
      <div className="content">
        <Row>
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
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-money-coins text-success" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Revenue</p>
                      <CardTitle tag="p">$ 1,345</CardTitle>
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
                    <div className="icon-big text-center icon-warning">
                      <i style={{color:'red'}} className="nc-icon nc-bell-55" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Nợ môn</p>
                      <CardTitle tag="p">23</CardTitle>
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
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-hat-3 text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Chuẩn tốt nghiệp</p>
                      <CardTitle tag="p">16</CardTitle>
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
          <Col md="12">
      <Card className="card-plain">
        <CardHeader>
          
          <div className="button-group">
            <Button
              color={activeTab === "access" ? "primary" : "secondary"}
              onClick={() => switchTab("access")}
            >
              Lịch Sử Truy Cập
            </Button>
            <Button
              color={activeTab === "actions" ? "primary" : "secondary"}
              onClick={() => switchTab("actions")}
            >
              Lịch Sử Thao Tác
            </Button>
          </div>
        </CardHeader>
        <CardBody>
          {activeTab === "access" ? (
            <Table responsive>
      <thead className="text-primary">
        <tr>
          <th>ID</th>
          <th>MÃ NGƯỜI DÙNG</th>
          <th>THỜI GIAN ĐĂNG NHẬP</th>
          <th>THỜI GIAN ĐĂNG XUẤT</th>
        </tr>
      </thead>
      <tbody>
        {lichsu.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.username}</td>
            <td>{item.giovao}</td>
            <td>{item.giora || "Đang truy cập"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
          ) : (
            <Table responsive>
              <thead className="text-primary">
                <tr>
                  <th>Action</th>
                  <th>User</th>
                  <th>Date</th>
                  <th className="text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Login</td>
                  <td>John Doe</td>
                  <td>2024-12-11</td>
                  <td className="text-right">Success</td>
                </tr>
                <tr>
                  <td>Update Profile</td>
                  <td>Jane Smith</td>
                  <td>2024-12-10</td>
                  <td className="text-right">Success</td>
                </tr>
                <tr>
                  <td>Delete Record</td>
                  <td>John Doe</td>
                  <td>2024-12-09</td>
                  <td className="text-right">Failed</td>
                </tr>
                <tr>
                  <td>Logout</td>
                  <td>Jane Smith</td>
                  <td>2024-12-08</td>
                  <td className="text-right">Success</td>
                </tr>
              </tbody>
            </Table>
          )}
        </CardBody>
      </Card>
    </Col>
        </Row>
          {/* <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Users Behavior</CardTitle>
                  <p className="card-category">24 Hours performance</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboard24HoursPerformanceChart.data}
                    options={dashboard24HoursPerformanceChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" /> Updated 3 minutes ago
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Email Statistics</CardTitle>
                  <p className="card-category">Last Campaign Performance</p>
                </CardHeader>
                <CardBody style={{ height: "266px" }}>
                  <Pie
                    data={dashboardEmailStatisticsChart.data}
                    options={dashboardEmailStatisticsChart.options}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-primary" /> Opened{" "}
                    <i className="fa fa-circle text-warning" /> Read{" "}
                    <i className="fa fa-circle text-danger" /> Deleted{" "}
                    <i className="fa fa-circle text-gray" /> Unopened
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-calendar" /> Number of emails sent
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">NASDAQ: AAPL</CardTitle>
                  <p className="card-category">Line Chart with Points</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboardNASDAQChart.data}
                    options={dashboardNASDAQChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <div className="chart-legend">
                    <i className="fa fa-circle text-info" /> Tesla Model S{" "}
                    <i className="fa fa-circle text-warning" /> BMW 5 Series
                  </div>
                  <hr />
                  <div className="card-stats">
                    <i className="fa fa-check" /> Data information certified
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row> */}
      </div>
    </>
  );
}

export default Dashboard;
