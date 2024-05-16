import { Button, Col, Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
//import CardComp from "../components/CardComp";
import heroImage from "../assets/equality.svg";
const Homepage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col>
              <h1 className="mb-5">
                Bersama <br /> berbagi untuk <br /> masa depan
              </h1>
              <Button className="btn rounded-5 me-4">
                <NavLink to="/kegiatan-donasi">Donasi Sekarang</NavLink>
              </Button>
              <Button className="btn2 rounded-5 me-4">
                <NavLink to="/kegiatan-volun">Daftar Volunteer</NavLink>
              </Button>
            </Col>
            <Col>
              <a href="https://iconscout.com/illustrations/equality">
                <img src={heroImage} alt="hero-image" />
              </a>
            </Col>
          </Row>
        </Container>
      </header>

      <div className="kegiatandonasi w-100 min-vh-100">
        <Container>
          <h1>Kegiatan Donasi</h1>
        </Container>
      </div>
    </div>
  );
};

export default Homepage;
