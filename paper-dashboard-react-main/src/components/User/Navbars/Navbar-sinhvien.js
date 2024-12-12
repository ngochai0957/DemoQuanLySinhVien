import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Button,
} from "reactstrap";

import routes from "routesUser.js";

function Header(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [color, setColor] = React.useState("transparent");
  const sidebarToggle = React.useRef();
  const location = useLocation();

  const toggle = () => {
    if (isOpen) {
      setColor("transparent");
    } else {
      setColor("dark");
    }
    setIsOpen(!isOpen);
  };

  const dropdownToggle = (e) => {
    setDropdownOpen(!dropdownOpen);
  };

  const getBrand = () => {
    let brandName = "Default Brand";
    routes.map((prop, key) => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        brandName = prop.name;
      }
      return null;
    });
    return brandName;
  };

  const openSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    sidebarToggle.current.classList.toggle("toggled");
  };

  // function that adds color dark/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && isOpen) {
      setColor("dark");
    } else {
      setColor("transparent");
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateColor.bind(this));
    return () => {
      window.removeEventListener("resize", updateColor.bind(this));
    };
  }, [isOpen]);

  React.useEffect(() => {
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      sidebarToggle.current.classList.toggle("toggled");
    }
  }, [location]);

  return (
    <Navbar
      color={
        location.pathname.indexOf("full-screen-maps") !== -1 ? "dark" : color
      }
      expand="lg"
      className={
        location.pathname.indexOf("full-screen-maps") !== -1
          ? "navbar-absolute fixed-top"
          : "navbar-absolute fixed-top " +
          (color === "transparent" ? "navbar-transparent " : "")
      }
    >
      <Container fluid>
        <div className="navbar-wrapper">

          <NavbarBrand href="/admin/sinhvien">{getBrand()}</NavbarBrand>
        </div>

        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <form>
            <InputGroup className="no-border">
              <Input placeholder="Search..." />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <i className="nc-icon nc-zoom-split" />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </form>
          <Nav navbar>
            <Button
              style={{
                height: '34px',
                display: 'flex',        // Sử dụng Flexbox
                alignItems: 'center',   // Căn giữa theo chiều dọc
                justifyContent: 'center', // Căn giữa theo chiều ngang
                padding: '0 10px',      // Giữ khoảng cách trong nút
                margin: '4px'
              }}
              className="btn-round mr-2"
              color="success"
              type="button"
              onClick={props.onAdd}
            >
              <p style={{ padding: '10px 10px', fontWeight: 'bold' }}>
                <i style={{ paddingRight: '4px', fontWeight: 'bold' }}
                  className="nc-icon nc-simple-add" />
                Thêm</p>
            </Button>

            <Button style={{
              height: '34px',
              display: 'flex',        // Sử dụng Flexbox
              alignItems: 'center',   // Căn giữa theo chiều dọc
              justifyContent: 'center', // Căn giữa theo chiều ngang
              padding: '0 10px',      // Giữ khoảng cách trong nút
              margin: '4px'
            }}
              className="btn-round mr-2"
              color="primary"
              type="button"
            >
              <p style={{ fontWeight: 'bold', paddingTop: '0' }}>
                <svg style={{fontWeight:'bold',paddingRight:'5px',fontSize:'20px'}} xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 48 48">
                <g strokeLinejoin="miter" fill="#ffffff" strokeLinecap="butt" className="nc-icon-wrapper">
                  <line
                    data-cap="butt"
                    data-color="color-2"
                    x1="24" y1="30"
                    x2="24" y2="3"
                    fill="none"
                    stroke="#ffffff"
                    strokeMiterlimit="10"
                    strokeWidth="3">
                  </line>
                  <polyline
                    data-color="color-2"
                    points="34 14 24 4 14 14"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    strokeWidth="3">
                  </polyline>
                  <path
                    d="M4,32v8a4,4,0,0,0,4,4H40a4,4,0,0,0,4-4V32"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    strokeWidth="3">
                  </path>
                </g>
              </svg>
                Nhập dữ liệu từ Excel</p>
            </Button>
            <Button style={{
              height: '34px',
              display: 'flex',        // Sử dụng Flexbox
              alignItems: 'center',   // Căn giữa theo chiều dọc
              justifyContent: 'center', // Căn giữa theo chiều ngang
              padding: '0 10px',      // Giữ khoảng cách trong nút
              margin: '4px'
            }}
              className="btn-round"
              color="warning"
              type="button"
            >
              <p style={{padding:'10px 10px',fontWeight: 'bold'}}>
              <i style={{paddingRight:'4px',fontWeight: 'bold'}} className="nc-icon nc-cloud-download-93"  />
              Xuất dữ liệu
              </p>
            </Button>
          </Nav>
        </Collapse>
      </Container>
      
    </Navbar>
  );
}

export default Header;
