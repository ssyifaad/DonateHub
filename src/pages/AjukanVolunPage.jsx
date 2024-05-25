import {
  Container,
  Form,
  FormGroup,
  Label,
  Row,
  Col,
  Input,
  Button,
} from "reactstrap";

const AjukanVolunPage = () => {
  return (
    <div>
      <Container className="ajukanvolunteer w-50">
        <h2 className="title text-center mb-5">Masukkan Detail Kegiatan</h2>
        <Form>
          <FormGroup row>
            <Label for="volunNama" sm={4}>
              Nama Kegiatan
            </Label>
            <Col sm={8}>
              <Input id="volunNama" name="namavolun" type="text" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="volunPenyelenggara" sm={4}>
              Nama Instansi Penyelenggara
            </Label>
            <Col sm={8}>
              <Input
                id="volunPenyelenggara"
                name="penyelenggaravolun"
                type="text"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="alamatPenyelenggara" sm={4}>
              Alamat Instansi Penerima
            </Label>
            <Col sm={8}>
              <Input
                id="alamatPenyelenggara"
                name="alamatpenyelenggara"
                type="textarea"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="volunpemohonNama" sm={4}>
              Nama Pemohon
            </Label>
            <Col sm={8}>
              <Input
                id="volunpemohonNama"
                name="namapemohonvolun"
                type="text"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="volunpemohonKontak" sm={4}>
              No. Telepon
            </Label>
            <Col sm={8}>
              <Input
                id="volunpemohonKontak"
                name="kontakpemohonvolun"
                type="text"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="volunpemohonEmail" sm={4}>
              Email Pemohon
            </Label>
            <Col sm={8}>
              <Input
                id="volunpemohonEmail"
                name="emailpemohonvolun"
                type="email"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="volunalamatPemohon" sm={4}>
              Alamat Pemohon
            </Label>
            <Col sm={8}>
              <Input
                id="volunalamatPemohon"
                name="alamatpemohonvolun"
                type="textarea"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="volunDeskripsi" sm={4}>
              Deskripsi Kegiatan
            </Label>
            <Col sm={8}>
              <Input id="volunDeskripsi" name="deskripsi" type="textarea" />
            </Col>
          </FormGroup>

          <Row>
            <Col md={8}>
              <FormGroup row>
                <Label for="openRegist" sm={6}>
                  Tanggal Pendaftaran
                </Label>
                <Col sm={6}>
                  <Input
                    id="openRegist"
                    name="opendate"
                    placeholder="date placeholder"
                    type="date"
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup row>
                <Label for="closeRegist" sm={2}>
                  s.d
                </Label>
                <Col sm={10}>
                  <Input
                    id="closeRegist"
                    name="closedate"
                    placeholder="date placeholder"
                    type="date"
                  />
                </Col>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={8}>
              <FormGroup row>
                <Label for="volunMulai" sm={6}>
                  Tanggal Pelaksanaan
                </Label>
                <Col sm={6}>
                  <Input
                    id="volunMulai"
                    name="mulaidate"
                    placeholder="date placeholder"
                    type="date"
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup row>
                <Label for="volunSelesai" sm={2}>
                  s.d
                </Label>
                <Col sm={10}>
                  <Input
                    id="volunSelesai"
                    name="selesaidate"
                    placeholder="date placeholder"
                    type="date"
                  />
                </Col>
              </FormGroup>
            </Col>
          </Row>

          <FormGroup row>
            <Label for="volunFile" sm={4}>
              File Pendukung
            </Label>
            <Col sm={8}>
              <Input id="exampleFile" name="file" type="file" />
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

export default AjukanVolunPage;
