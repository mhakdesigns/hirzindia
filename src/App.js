import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./pages/ServicesPage";
import AboutUs from "./components/AboutUs";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/abouttt" element={<AboutUs />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
