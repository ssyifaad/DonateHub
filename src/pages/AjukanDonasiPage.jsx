import {
  Container,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupText,
} from "reactstrap";

const AjukanDonasiPage = () => {
  return (
    <div>
      <Container className="ajukandonasi w-50">
        <h2 className="title text-center mb-5">Masukkan Detail Donasi</h2>
        <Form>
          <FormGroup row>
            <Label for="donasiNama" sm={4}>
              Nama Kegiatan
            </Label>
            <Col sm={8}>
              <Input id="donasiNama" name="namadonasi" type="text" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="donasiPenerima" sm={4}>
              Nama Penerima
            </Label>
            <Col sm={8}>
              <Input id="donasiPenerima" name="penerimadonasi" type="text" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="alamatPenerima" sm={4}>
              Alamat Penerima
            </Label>
            <Col sm={8}>
              <Input
                id="alamatPenerima"
                name="alamatpenerima"
                type="textarea"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="pemohonNama" sm={4}>
              Nama Pemohon
            </Label>
            <Col sm={8}>
              <Input id="pemohonNama" name="namapemohon" type="text" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="pemohonKontak" sm={4}>
              No. Telepon
            </Label>
            <Col sm={8}>
              <Input id="pemohonKontak" name="kontakpemohon" type="text" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="pemohonEmail" sm={4}>
              Email Pemohon
            </Label>
            <Col sm={8}>
              <Input id="pemohonEmail" name="emailpemohon" type="email" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="alamatPemohon" sm={4}>
              Alamat Pemohon
            </Label>
            <Col sm={8}>
              <Input id="alamatPemohon" name="alamatpemohon" type="textarea" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="ceritadonasi" sm={4}>
              Cerita Donasi
            </Label>
            <Col sm={8}>
              <Input id="ceritadonasi" name="cerita" type="textarea" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="targetdonasi" sm={4}>
              Target Donasi
            </Label>
            <Col onSubmit={8}>
              <InputGroup className="input-target">
                <InputGroupText>Rp</InputGroupText>
                <Input bsSize="lg" />
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Button className="my-3">Ajukan</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
};

export default AjukanDonasiPage;
