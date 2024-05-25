import { NavLink } from "react-router-dom";
import { Button, Container, Row } from "reactstrap";

const PaymentPage = () => {
  return (
    <div>
      <Container className="payment w-50 min-vh-100 text-center">
        <Row>
          <h3>Pindai QR code berikut untuk melakukan pembayaran</h3>
          <img src="/src/assets/qris.png" className="py-4" />
        </Row>
        <Row>
          <Button>
            <NavLink to="/detail-donasi">Pembayaran Selesai</NavLink>
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default PaymentPage;
