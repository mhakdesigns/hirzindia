import React from "react";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ContactSection from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <ContactSection/>
      <Footer />
    </div>
  );
};

export default Home;
