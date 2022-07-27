import React from 'react';

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Sara from "./components/pages/sara/Sara";
import NoPage from "./components/pages/NoPage";
import Students from "./components/pages/Bomi/Students";
import HeaderB from "./components/pages/Bomi/HeaderB";
import About from "./components/pages/Bomi/About";
import AddEdit from "./components/pages/Bomi/AddEdit";
import View from "./components/pages/Bomi/View";
import ApiTest from "./components/pages/Bomi/ApiTest";
import Erik from "./components/pages/erik/Erik";
import Kristofer from "./components/pages/kristofer/Kristofer";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/Home";

function App() {
  return (
    <BrowserRouter>
    {/* {/* <div className="App"> */}

      <ToastContainer />   
      <Header />
    
    
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="sara" element={<Sara />} />
          <Route path="bomi" element={<Students />} />
          <Route path="bomi" element={<HeaderB />} />
          <Route path="/homeB" element={<HeaderB />} />
          <Route path="/add" element={<AddEdit />} />
          <Route path="/update/:id" element={<AddEdit />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/about" element={<About />} />
          <Route path="bomib" element={<ApiTest/>} /> 

          <Route path="kristofer" element={<Kristofer />} />
          <Route path="erik" element={<Erik />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <Footer />
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
