import React from "react";
import Footer from "../components/Footer";
import ServicesDetailed from "../components/ServicesDetailed";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ContactSection from "../components/Contact";

const Container = styled.div`
`
const ServicesPage = () => {
  return (
    <Container>
      <Navbar />
      <ServicesDetailed />
      <ContactSection/>
      <Footer />
    </Container>
  );
};

export default ServicesPage;
