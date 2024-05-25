import {
  Container,
  Form,
  FormGroup,
  Row,
  Col,
  Label,
  Input,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const DaftarVolunPage = () => {
  return (
    <div>
      <Container className="volunregist w-50">
        <NavLink to={"/detail-volunteer"} className="btn nav">
          <img src="src/assets/Arrow 1.png" className="img me-3" />
          Kembali
        </NavLink>
        <h2 className="text text-center mb-4">Masukkan Data Diri</h2>

        <Form>
          <Row>
            <Col md={10}>
              <FormGroup>
                <Label for="volunName">Nama Lengkap</Label>
                <Input id="volunName" name="fullname" type="text" />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="volunAge">Usia</Label>
                <Input id="volunAge" name="age" type="number" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="volunAddr">Alamat</Label>
            <Input id="volunAddr" name="address" type="textarea" />
          </FormGroup>
          <Row>
            <Col md={7}>
              <FormGroup>
                <Label for="volunEmail">Email</Label>
                <Input id="volunEmail" name="email" type="email" />
              </FormGroup>
            </Col>
            <Col md={5}>
              <FormGroup>
                <Label for="volunPhoneNum">No. Telepon</Label>
                <Input id="volunPhoneNum" name="PhoneNumber" type="text" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="volunJob">Pekerjaan</Label>
            <Input id="volunJob" name="job" type="text" />
          </FormGroup>
          <FormGroup>
            <Label for="volunSkill">Minat dan Keahlian Khusus</Label>
            <Input id="volunSkill" name="skill" type="textarea" />
          </FormGroup>

          <Button className="my-4 regist">Daftar</Button>
        </Form>
      </Container>
    </div>
  );
};

export default DaftarVolunPage;
