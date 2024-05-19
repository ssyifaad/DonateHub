import { Button, Col, Container, Progress, Row } from "reactstrap";
import { NavLink } from "react-router-dom";

const DetailDonasiPage = () => {
  return (
    <div className="detaildonasi">
      <Container className="w-50">
        <NavLink to={"/kegiatan-donasi"} className="btn nav">
          <img src="src/assets/Arrow 1.png" className="img me-3" />
          Kembali
        </NavLink>
        <Row className="row">
          <img src="donasi-hd.png" />
          <h1 className="title mt-2"> Donasi </h1>
          <Col className="col">Rp5.200.000</Col>
          <Col className="col text-end">Rp70.000.000</Col>
          <Progress
            color="success"
            value={7}
            style={{
              height: "10px",
            }}
          ></Progress>
        </Row>
        <Row className="row mt-4">
          <h2 className="desc"> Cerita Penggalangan Dana</h2>
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
            cupiditate mollitia. Quod voluptatum, voluptate nobis ea tenetur
            distinctio fugiat illum repellat suscipit! Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Repellendus obcaecati accusamus
            porro veritatis tempore eveniet corrupti dolorem beatae fuga nisi ut
            similique expedita ducimus reprehenderit cupiditate voluptatibus
            repudiandae, totam sequi. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. In beatae harum dolorum doloribus eveniet cumque
            dignissimos dolorem tempore.
          </p>
        </Row>

        <Row className="row my-3">
          <h1>donasi (jumlah) </h1>
        </Row>
        <Row>
          <Col className="col justify-content-center">
            <Button className="btn rounded-2 me-4">
              <NavLink to="/kegiatan-donasi">Bagikan</NavLink>
            </Button>
            <Button className="btn2 rounded-2 me-4">
              <NavLink to="/kegiatan-volunteer">Donasi Sekarang</NavLink>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailDonasiPage;
