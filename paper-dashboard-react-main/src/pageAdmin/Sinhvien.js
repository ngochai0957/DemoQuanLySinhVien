import React, { useState, useEffect } from "react";
import axios from "axios";
import format from 'date-fns/format';
import Header from "components/Admin/Navbars/Navbar-sinhvien"; // Điều chỉnh đường dẫn nếu cần
import "../assets/css/Sinhvien.css";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert, // Thêm component Alert để hiển thị thông báo
} from "reactstrap";

function Sinhvien() {
  const [students, setStudents] = useState([]); // Dữ liệu sinh viên từ API
  const [selectedRow, setSelectedRow] = useState(null); // Hàng được chọn
  const [modalOpen, setModalOpen] = useState(false); // Trạng thái modal xác nhận xóa
  const [studentToDelete, setStudentToDelete] = useState(null); // Sinh viên sẽ bị xóa
  const [modalAddOpen, setModalAddOpen] = useState(false); // Trạng thái modal thêm sinh viên
  const Username = localStorage.getItem("fullName");
  const [newStudent, setNewStudent] = useState({
    mssv: "",
    hoten: "",
    lop: "",
    ngaysinh: "",
    gioitinh: "",
    sdt: "",
    email: "",
    diachi: "",
    trangthai: "Đúng thời hạn", // Mặc định
  });

  // Trạng thái thông báo thành công
  const [successMessage, setSuccessMessage] = useState("");
  // Trạng thái thông báo thành công
  const [errorMessage, setErrorMessage] = useState("");

  // Gọi API để lấy danh sách sinh viên
  useEffect(() => {
    axios
      .get("https://localhost:7166/api/SinhVien/all")
      .then((response) => {
        setStudents(response.data); // Lưu dữ liệu vào state
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu sinh viên:", error);
      });
  }, []);


  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleDeleteClick = (student) => {
    setStudentToDelete(student);
    toggleModal();
  };

  const toggleAddModal = () => {
    setModalAddOpen(!modalAddOpen);
    
  };

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
  
    if (
      !newStudent.mssv ||
      !newStudent.hoten ||
      !newStudent.lop ||
      !newStudent.ngaysinh ||
      !newStudent.gioitinh ||
      !newStudent.sdt ||
      !newStudent.email ||
      !newStudent.diachi
    ) {
      alert("Vui lòng điền đầy đủ thông tin sinh viên.");
      return;
    }
  
    axios
      .post("https://localhost:7166/api/SinhVien/add", newStudent)
      .then((response) => {
        if (response.data.student) {
          setSuccessMessage("Thêm sinh viên thành công!");
  
          // Gọi lại API để cập nhật danh sách sinh viên
          axios.get("https://localhost:7166/api/SinhVien/all")
            .then((res) => {
              setStudents(res.data);
            })
            .catch((error) => {
              console.error("Lỗi khi cập nhật danh sách sinh viên:", error);
            });
  
          // Reset form
          setNewStudent({
            mssv: "",
            hoten: "",
            lop: "",
            ngaysinh: "",
            gioitinh: "",
            sdt: "",
            email: "",
            diachi: "",
            trangthai: "Đang học",
          });
  
          // Đóng modal
          toggleAddModal();
  
          // Ẩn thông báo sau 3 giây
          setTimeout(() => {
            setSuccessMessage("");
          }, 3000);
        }
      })
      .catch((error) => {
        if (error.response) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage(error.message);
        }
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      });
  };
  // Hàm xóa sinh viên
const confirmDelete = () => {
  axios
    .delete(`https://localhost:7166/api/SinhVien/delete/${studentToDelete.mssv}`, {
      data: { Mssv: studentToDelete.mssv,
        Username: Username
       },
    })
    .then((response) => {
      setSuccessMessage(`Xóa sinh viên ${studentToDelete.hoten} thành công!`);
      // Cập nhật danh sách sinh viên
      axios
        .get("https://localhost:7166/api/SinhVien/all")
        .then((res) => {
          setStudents(res.data);
        })
        .catch((error) => {
          console.error("Lỗi khi cập nhật danh sách sinh viên:", error);
        });
      // Đóng modal xóa
      toggleModal();
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    })
    .catch((error) => {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage(error.message);
      }
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    });
};
  
  
  return (
    <>
    {/* Hiển thị thông báo thành công nếu có */}
  {successMessage && (
    <Alert color="success">
      {successMessage}
    </Alert>
  )}
  
      <Header onAdd={toggleAddModal} />
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
             
              <CardBody>
                <Table responsive className="text-center">
                  <thead className="text-primary">
                    <tr>
                      <th style={{ width: "100px" }}>Mã số sinh viên</th>
                      <th style={{ width: "190px" }}>Họ tên</th>
                      <th style={{ width: "100px" }}>Lớp</th>
                      <th style={{ width: "100px" }}>Ngày sinh</th>
                      <th style={{ width: "100px" }}>Giới tính</th>
                      <th style={{ width: "130px" }}>Số điện thoại</th>
                      <th>Email</th>
                      <th>Địa chỉ</th>
                      <th>Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.length > 0 ? (
                      students.map((student) => (
                        <tr
                          key={student.id}
                          className="table-row"
                          style={{ cursor: "pointer" }}
                        >
                          <td>{student.mssv}</td>
                          <td>{student.hoten}</td>
                          <td>{student.lop}</td>
                          <td>{format(new Date(student.ngaysinh), 'dd-MM-yyyy')}</td>
                          <td>{student.gioitinh}</td>
                          <td>{student.sdt}</td>
                          <td>{student.email}</td>
                          <td>{student.diachi}</td>
                          <td className="status-column">
                            <div className="status-content">{student.trangthai}</div>
                            <div className="action-buttons">
                              <Button className="btn btn-edit" size="sm">
                                Sửa
                              </Button>
                              <Button
                                className="btn btn-delete"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation(); // Ngăn không cho sự kiện click trên hàng được kích hoạt
                                  handleDeleteClick(student);
                                }}
                              >
                                Xóa
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="9" style={{ textAlign: "center", color: "gray" }}>
                          Không có sinh viên nào được tìm thấy.
                        </td>
                      </tr>
                    )}
                  </tbody>

                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Modal xác nhận xóa */}
        <Modal isOpen={modalOpen} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>Xác nhận xóa</ModalHeader>
          <ModalBody>
            Bạn có chắc chắn muốn xóa sinh viên{" "}
            <strong>{studentToDelete?.hoten}</strong> không?
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={confirmDelete}>
              Xóa
            </Button>
            <Button color="secondary" onClick={toggleModal}>
              Hủy
            </Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={modalAddOpen} toggle={toggleAddModal}>
  <ModalHeader> Thêm Sinh Viên</ModalHeader>
  <ModalBody>
    <Form onSubmit={handleAddSubmit}>
      <Row>
        <Col md="6">
          <FormGroup>
            <Label for="masv">Mã số sinh viên</Label>
            <Input
              type="text"
              name="mssv"
              id="mssv"
              value={newStudent.mssv}
              onChange={handleAddChange}
              required
            />
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <Label for="hoten">Họ tên</Label>
            <Input
              type="text"
              name="hoten"
              id="hoten"
              value={newStudent.hoten}
              onChange={handleAddChange}
              required
            />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md="6">
          <FormGroup>
            <Label for="lop">Lớp</Label>
            <Input
              type="text"
              name="lop"
              id="lop"
              value={newStudent.lop}
              onChange={handleAddChange}
              required
            />
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <Label for="ngaysinh">Ngày sinh</Label>
            <Input
              type="date"
              name="ngaysinh"
              id="ngaysinh"
              value={newStudent.ngaysinh}
              onChange={handleAddChange}
              required
            />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md="6">
          <FormGroup>
            <Label for="gioitinh">Giới tính</Label>
            <Input
              type="select"
              name="gioitinh"
              id="gioitinh"
              value={newStudent.gioitinh}
              onChange={handleAddChange}
              required
            >
              <option value="">-- Chọn giới tính --</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
              <option value="Khác">Khác</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <Label for="sodienthoai">Số điện thoại</Label>
            <Input
              type="text"
              name="sdt"
              id="sdt"
              value={newStudent.sdt}
              onChange={handleAddChange}
              required
            />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md="6">
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={newStudent.email}
              onChange={handleAddChange}
              required
            />
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <Label for="diachi">Địa chỉ</Label>
            <Input
              type="text"
              name="diachi"
              id="diachi"
              value={newStudent.diachi}
              onChange={handleAddChange}
              required
            />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col className="text-center">
          <Button color="primary" type="submit" onClick={toggleAddModal}>
            Thêm
          </Button>{" "}
          <Button color="secondary" onClick={toggleAddModal}>
            Hủy
          </Button>
        </Col>
      </Row>

      {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
    </Form>
  </ModalBody>
</Modal>

      </div>
    </>
  );
}

export default Sinhvien;
