import { Col, Card, CardTitle, CardText } from "reactstrap";

const DonaturCardComp = () => {
  return (
    <div className="donaturcard">
      <Col className="my-2">
        <Card body>
          <CardTitle tag="h3">Orang Baik</CardTitle>
          <CardText>Berdonasi sebesar Rp50.000</CardText>
        </Card>
      </Col>
    </div>
  );
};

export default DonaturCardComp;
