import { Card, CardBody, CardTitle, Progress, CardSubtitle } from "reactstrap";

const CardComp = () => {
  // const cardInfo = [
  //   {
  //     imgSrc: "/donasi1.png",
  //     title: " Bantu Bapak Budi Cukupi Kebutuhannya",
  //     total: "Rp10.500.000",
  //     barvalue: "50",
  //   },
  //   {
  //     imgSrc: "/donasi2.png",
  //     title: "Sedekah Bantu Ibu Ani Bangun Kedai Usaha",
  //     total: "Rp2.500.000",
  //     barvalue: "65",
  //   },
  //   {
  //     imgSrc: "/donasi3.png",
  //     title: "Donasi untuk Anak-anak Sumbing",
  //     total: "Rp25.500.000",
  //     barvalue: "90",
  //   },
  // ];

  return (
    <div>
      <a href="./kegiatan-donasi">
        <Card
          tag="a"
          style={{
            width: "18rem",
            cursor: "pointer",
          }}
          className="mx-4"
        >
          <img alt="Donasi" src="/donasi1.png" />
          <CardBody>
            <CardTitle>Donasi</CardTitle>
            <CardSubtitle>Dana Terkumpul: Rp5.200.000</CardSubtitle>
            <Progress
              color="success"
              value={33}
              style={{
                height: "6px",
              }}
            />
          </CardBody>
        </Card>
      </a>
    </div>
  );
};

export default CardComp;
