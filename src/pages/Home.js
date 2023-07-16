import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
