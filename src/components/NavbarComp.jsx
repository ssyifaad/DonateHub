import { Navbar, NavbarBrand, Nav, Form, Input, Button } from "reactstrap";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

const NavbarComp = () => {
  return (
    <div className="sticky-top">
      <Navbar expand="lg">
        <NavbarBrand href="/">
          <img
            alt="logo"
            src="/logo1.png"
            style={{
              height: 25,
              width: 175,
            }}
          />
        </NavbarBrand>
        <Nav className="me-auto" navbar>
          {navLinks.map((link) => {
            return (
              <div className="nav-link" key={link.id}>
                <Button>
                  <NavLink to={link.path}>{link.text}</NavLink>
                </Button>
              </div>
            );
          })}
        </Nav>
        <Form className="search-box">
          <Input className="search" placeholder="Cari Kegiatan" />
        </Form>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
