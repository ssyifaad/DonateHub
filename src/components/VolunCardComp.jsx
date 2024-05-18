import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const VolunCardComp = () => {
  return (
    <div>
      <a href="./kegiatan-volunteer">
        <Card
          tag="a"
          className="mx-4 volunteercard"
          style={{
            width: "18rem",
          }}
        >
          <img alt="Donasi" src="/donasi1.png" />
          <CardBody>
            <CardTitle className="mb-4">Volunteer aaaaaaaaa</CardTitle>
            <CardSubtitle className="text-center">
              <span className="bg-success text-light px-2 py-1 rounded-2">
                Pendaftaran Dibuka!
              </span>
              <br />
              12 Apr - 15 Mei 2023
            </CardSubtitle>
          </CardBody>
        </Card>
      </a>
    </div>
  );
};

export default VolunCardComp;
