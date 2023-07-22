import React from "react";
import styled from "styled-components";
import serviceData from "../data";
import ServicesDetailedCard from "./ServicesDetailedCard";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 480px) {
    
  }
`;
const Content = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
// const Service = styled.div``;
const H = styled.h1`
  text-align: center;
  color: #000000;
`;

const Cards = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin: 50px 50px 50px 100px;
  display: grid;
  grid-template-columns: auto auto auto;
  @media (max-width: 480px) {
    grid-template-columns: 100%;
    margin: 50px 0;
    gap: 50px;
  }
`;

const ServicesDetailed = () => {
  return (
    <Container>
      <Content>
        <H>Our Services</H>
        <Cards>
          {serviceData.map((item) => (
            <ServicesDetailedCard
              title={item.title}
              img={item.img}
              desc={item.disc}
            />
          ))}
        </Cards>
      </Content>
    </Container>
  );
};

export default ServicesDetailed;
