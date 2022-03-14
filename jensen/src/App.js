import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sara from "./components/pages/Sara";
import NoPage from "./components/pages/NoPage";


function App() {
  return (

    <BrowserRouter>

      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="sara" element={<Sara />} />
          <Route path="bomi" element={<Bomi />} />
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
