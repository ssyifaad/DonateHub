import {
  Button,
  Container,
  Row,
  InputGroup,
  Input,
  InputGroupText,
  Form,
  FormGroup,
  Label,
} from "reactstrap";

import { NavLink } from "react-router-dom";

const DonasiPage = () => {
  return (
    <div className="donasi">
      <Container className="w-50 pt-5">
        <NavLink to={"/detail-donasi"} className="btn nav">
          <img src="src/assets/Arrow 1.png" className="img me-3" />
          Kembali
        </NavLink>
        <Row>
          <h3 className="text">Masukkan Nominal Donasi</h3>

          <FormGroup check>
            <Input name="radio1" type="radio" /> <Label check>Rp15.000</Label>
          </FormGroup>
          <FormGroup check>
            <Input name="radio1" type="radio" /> <Label check>Rp30.000</Label>
          </FormGroup>
          <FormGroup check>
            <Input name="radio1" type="radio" /> <Label check>Rp50.000</Label>
          </FormGroup>
          <FormGroup check>
            <Input name="radio1" type="radio" /> <Label check>Rp100.000</Label>
          </FormGroup>
          <FormGroup check>
            <Input name="radio1" type="radio" />{" "}
            <Label check>Nominal Lainnya</Label>
            <InputGroup className="input-nominal">
              <InputGroupText>Rp</InputGroupText>
              <Input bsSize="lg" placeholder="25.000" />
            </InputGroup>
          </FormGroup>
        </Row>

        <Row className="payment-method my-3">
          <h3>Metode Pembayaran</h3>
          <span className="text fs-4">
            <img src="/src/assets/Gopay Logo.png" className="me-3" />
            Go-Pay
          </span>
        </Row>

        <Row className="donatur-form my-3">
          <h3>Lengkapi Data Berikut</h3>
          <Form>
            <Input bsSize="lg" className="mb-3 input-nama" placeholder="Nama" />
            <Input
              bsSize="lg"
              className="mb-3 input-kontak"
              placeholder="Email"
              type="email"
            />
          </Form>
        </Row>

        <Button className="btn pay-btn px-4 rounded-4">
          <NavLink to={"/pembayaran"}>Lanjutkan Pembayaran</NavLink>
        </Button>
      </Container>
    </div>
  );
};

export default DonasiPage;
