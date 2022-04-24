//Sara har skapat Router och vi har impoterat våra components individuellt.

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sara from "./components/pages/sara/Sara";
import NoPage from "./components/pages/NoPage";
import Students from "./components/pages/Bomi/Students";
import ApiTest from "./components/pages/Bomi/ApiTest";
import Erik from "./components/pages/erik/Erik";
import Kristofer from "./components/pages/kristofer/Kristofer";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="sara" element={<Sara />} />
          <Route path="bomi" element={<Students />} />
          <Route path="bomib" element={<ApiTest/>} /> 
          <Route path="kristofer" element={<Kristofer />} />
          <Route path="erik" element={<Erik />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
