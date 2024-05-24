import { Button, Col, Container, Row } from "reactstrap";

const DonasiPage = () => {
  return (
    <div className="donasi">
      <Container className="w-50 pt-5">
        <h2>Masukkan Nominal Donasi</h2>
        <Row>
          <Button className="btn">
            <img src="src/assets/smile1.png" className="me-3" />
            lima puluh rebu
          </Button>

          <Button className="btn">
            <img src="src/assets/smile2.png" className="me-3" />
            lima puluh rebu
          </Button>

          <Button className="btn">
            <img src="src/assets/smile3.png" className="me-3" />
            lima puluh rebu
          </Button>

          <Button className="btn">
            <img src="src/assets/smile4.png" className="me-3" />
            lima puluh rebu
          </Button>
        </Row>
        <Row>
          <h5>Nominal lainnya</h5>
          <Col className="col-lg-2 bg-success">
            <h2>Rp</h2>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default DonasiPage;
