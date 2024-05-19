import { Container, Row } from "reactstrap";
import CardComp from "../components/CardComp";

const KegiatanDonasiPage = () => {
  return (
    <div className="pagekegdonasi">
      <Container>
        <Row className="row header w-100 h-50">
          <h1>Setetes Donasi, Sejuta Harapan</h1>
          <p className="subtagline text-center">
            Setiap kontribusi, sekecil apa pun, membawa dampak besar. <br /> Ayo
            berdonasi sekarang dan jadilah bagian dari perubahan positif.
          </p>
        </Row>
        <Row className="row row-cols-4 g-4 row-donasi">
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
        </Row>
      </Container>
    </div>
  );
};

export default KegiatanDonasiPage;
