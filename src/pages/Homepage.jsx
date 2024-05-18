import { Button, Col, Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import CardComp from "../components/CardComp";
import heroImage from "../assets/equality.svg";
import VolunCardComp from "../components/VolunCardComp";

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
                <NavLink to="/kegiatan-volunteer">Daftar Volunteer</NavLink>
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
          <Row>
            <h1 className="mb-4">Kegiatan Donasi</h1>
          </Row>
          <Row>
            <Col className="ui centered cards m-4">
              <CardComp />
              <CardComp />
              <CardComp />
            </Col>
          </Row>
          <Button className="btn rounded-5 px-4">
            <NavLink to="/kegiatan-donasi">Lihat Lebih Banyak</NavLink>
          </Button>
        </Container>
      </div>

      <div className="kegiatanvolunteer w-100 min-vh-100">
        <Container>
          <Row>
            <h1 className="mb-4">Kegiatan Volunteer</h1>
          </Row>
          <Row>
            <Col className="ui centered cards m-4">
              <VolunCardComp />
              <VolunCardComp />
              <VolunCardComp />
            </Col>
          </Row>
          <Button className="btn rounded-5 px-3">
            <NavLink to="/kegiatan-volunteer">Lihat Lebih Banyak</NavLink>
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default Homepage;
