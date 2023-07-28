import React from "react";
import styled from "styled-components";
import Service from "./Service";
import serviceData from "../data";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #d8d7d7; */
`;
const Content = styled.div`
  /* background-color: #774c63; */
  height: 600px;
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
  @media (max-width: 780px) {
    margin: 50px 0;
    gap: 10px;
  }
`;

const Button = styled.button`
  /* top: 300px;
  position: absolute;
  left: 30px; */
  background-color: #004658;
  color: white;
  padding: 10px;
  width: 150px;
  margin-top: 10px;
  border: none;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  @media (max-width: 780px) {
    margin-top: 30px;
    top: 250px;
  }
  &:hover {
    color: white;
    background-color: black;
    cursor: pointer;
  }
`;
const Services = () => {
  return (
    <Container>
      <Content>
        <H>Our Services</H>
        <Cards>
          {serviceData.map((item) => (
            <Service title={item.title} img={item.img} />
          ))}
        </Cards>
        <Button>Explore Now</Button>
      </Content>
    </Container>
  );
};

export default Services;
