import { Navbar, NavbarBrand, Nav, Form, Input, Button } from "reactstrap";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

const NavbarComp = () => {
  return (
    <div>
      <Navbar expand="lg">
        <NavbarBrand href="/">
          <img
            alt="logo"
            src="/logo-only.png"
            style={{
              height: 50,
              width: 50,
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
