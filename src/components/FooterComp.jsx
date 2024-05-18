import { Col, Container, Row } from "reactstrap";

const FooterComp = () => {
  return (
    <div className="footer">
      <Container className="container">
        <Row className="row text-center justify-content-center">
          <Col className="col p-4">
            <img
              src="logo-only-1.png"
              style={{
                height: 30,
                width: 30,
                opacity: 0.8,
              }}
            />
            <span className="ms-4">Proyek Akhir ADS Kelompok 1</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComp;
