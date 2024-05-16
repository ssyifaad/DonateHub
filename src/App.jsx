// eslint-disable-next-line no-unused-vars
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import DetailDonasiPage from "./pages/DetailDonasiPage";
import AjukanDonasiPage from "./pages/AjukanDonasiPage";
import AjukanVolunPage from "./pages/AjukanVolunPage";
import DonasiPage from "./pages/DonasiPage";
import PaymentPage from "./pages/PaymentPage";
import DaftarVolunPage from "./pages/DaftarVolunPage";
import KegiatanDonasiPage from "./pages/KegiatanDonasiPage";
import KegiatanVolunPage from "./pages/KegiatanVolunPage";

import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/FooterComp";
//import CardComp from "./components/CardComp";

function App() {
  return (
    <div>
      <NavbarComp />

      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/detail-donasi" Component={DetailDonasiPage} />
        <Route path="/pengajuan-donasi" Component={AjukanDonasiPage} />
        <Route path="/pengajuan-volunteer" Component={AjukanVolunPage} />
        <Route path="/daftar-volunteer" Component={DaftarVolunPage} />
        <Route path="/pembayaran" Component={PaymentPage} />
        <Route path="/donasi-sekarang" Component={DonasiPage} />
        <Route path="/kegiatan-donasi" Component={KegiatanDonasiPage} />
        <Route path="/kegiatan-volunteer" Component={KegiatanVolunPage} />
      </Routes>

      <FooterComp />
    </div>
  );
}

export default App;
