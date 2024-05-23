import { Button, Col, Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";

const DetailVolunPage = () => {
  return (
    <div className="detailvolun">
      <Container className="w-50">
        <NavLink to={"/kegiatan-volunteer"} className="btn nav">
          <img src="src/assets/Arrow 1.png" className="img me-3" />
          Kembali
        </NavLink>
        <Row className="row volun-title">
          <img src="volun1.png" />
          <h1 className="title mt-2"> Volunteer Lorem ipsum dolor sit amet</h1>
          <h4 className="ms-3 rounded-2 py-1">Pendaftaran Dibuka!</h4>
        </Row>
        <Row className="row mt-4">
          <h2 className="desc-title"> Di Balik Kegiatan </h2>
          <p className="desc-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            quam corrupti cumque architecto voluptas vero assumenda delectus,
            pariatur officia quis tenetur, maxime ab dolorem, excepturi quidem
            illum culpa? Est, eaque! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Commodi dicta exercitationem excepturi nisi, non
            tempora impedit, possimus aliquid adipisci cupiditate qui soluta
            accusantium repellendus! Aperiam aliquid temporibus ducimus sapiente
            iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            fuga porro, consequuntur praesentium eaque itaque esse beatae
            cupiditate mollitia.
          </p>
        </Row>

        <Row className="row detailkeg">
          <h2 className="mt-3">Detail Kegiatan</h2>
          <Row className="row table detail-tabel">
            <Col className="col detail-name">
              Tanggal Pendaftaran <br />
              Tanggal Pelaksanaan <br />
              Lokasi Kegiatan <br />
            </Col>
            <Col className="col detail-val text-end ">
              1 Januari - 1 Maret 2023 <br />
              12 Maret 2023 <br />
              Bandung <br />
            </Col>
          </Row>
        </Row>

        <Row className="row mt-4">
          <Col className="text-center">
            <Button className="btn share-btn rounded-2 me-4">
              <NavLink to="/kegiatan-donasi">Bagikan</NavLink>
            </Button>
            <Button className="btn regis-btn rounded-2 me-4">
              <NavLink to="/kegiatan-volunteer">Daftar Sekarang</NavLink>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailVolunPage;
