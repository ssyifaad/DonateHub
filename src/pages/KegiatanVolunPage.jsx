import { Container, Row } from "reactstrap";
import VolunCardComp from "../components/VolunCardComp";

const KegiatanVolunPage = () => {
  return (
    <div className="pagekegvolun">
      <Container>
        <Row className="row header w-100 h-50">
          <h1>Berbagi Waktu, Berbagi Kasih</h1>
          <p className="subtagline text-center">
            Bersama-sama, kita bisa lebih kuat. <br />
            Bergabunglah sebagai relawan dan berkontribusilah dalam menciptakan
            dunia yang lebih baik.
          </p>
        </Row>
        <Row className="row row-cols-4 g-4 row-volunteer">
          <VolunCardComp />
          <VolunCardComp />
          <VolunCardComp />
          <VolunCardComp />
          <VolunCardComp />
          <VolunCardComp />
          <VolunCardComp />
        </Row>
      </Container>
    </div>
  );
};

export default KegiatanVolunPage;
