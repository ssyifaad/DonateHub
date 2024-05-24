import { Button, Col, Container, Row } from "reactstrap";

const DonasiPage = () => {
  return (
    <div className="donasi">
      <Container className="w-50 pt-5">
        <Row>
          <h2>Masukkan Nominal Donasi</h2>
          <Col>
            <Button>lima puluh rebu</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DonasiPage;
