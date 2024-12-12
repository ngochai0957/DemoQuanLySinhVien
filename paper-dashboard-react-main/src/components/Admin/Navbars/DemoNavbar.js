import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
} from "reactstrap";

import routes from "../../../routesAmin.js";

function Header(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [color, setColor] = React.useState("transparent");
  const sidebarToggle = React.useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const toggle = () => setIsOpen(!isOpen);
  const dropdownToggle = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = async () => {
    const username = localStorage.getItem("fullName"); 

    if (!username) {
      console.error("Không tìm thấy tên người dùng trong localStorage.");
      return;
    }

    try {
      const response = await fetch("https://localhost:7166/api/Auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
      });

      if (response.ok) {
        localStorage.removeItem("fullName");
        localStorage.removeItem("authToken");
        navigate("/login");
      } else {
        const error = await response.json();
        console.error("Lỗi khi đăng xuất:", error.message || "Unknown error");
      }
    } catch (error) {
      console.error("Đã xảy ra lỗi khi gọi API đăng xuất:", error);
    }
  };

  return (
    <Navbar color={color} expand="lg" className="navbar-absolute fixed-top">
      <Container fluid>
        <NavbarBrand href="/">{routes.find(route => route.path === location.path)?.name || "Dashboard"}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Nav navbar>
            <Dropdown nav isOpen={dropdownOpen} toggle={dropdownToggle}>
              <DropdownToggle nav caret>
                <i className="nc-icon nc-circle-10" />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={handleLogout}>Đăng xuất</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
