import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  /* top: 0; */
  height: 100vh;
  width: 100%;
  /* background-color: #774c63; */
  background-color: #004658;

  @media (max-width: 780px) {
    height: 60vh;
  }
`;

const Motive = styled.h1`
  /* position: absolute; */
  font-size: 5em;
  left: 20px;
  top: 200px;
  color: #2094b1;
  @media (max-width: 780px) {
    position: absolute;
    font-size: 3em;
    text-align: left;
    top: 150px;
  }
`;
const Button = styled.button`
  /* top: 300px;
  position: absolute;
  left: 30px; */
  padding: 10px;
  width: 150px;
  margin-top: 10px;
  border: none;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  @media (max-width: 780px) {
    position: absolute;
    margin-top: 30px;
    top: 280px;
  }
  &:hover {
    color: white;
    background-color: black;
    cursor: pointer;
  }
`;
const arrowAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;
const Arrow = styled.svg`
  transform: translateY(100%);
  left: 50%;
  text-align: center;
  animation: ${arrowAnimation} 2s ease-in-out infinite;
  @media (max-width: 780px) {
    /* bottom: 0; */
    position: absolute;
    top: 500px;
  }
`;
const HeroSection = () => {
  return (
    <Container>
      <Motive>
        Welcome to your <b style={{ color: "#fff" }}>Webmate!</b>
      </Motive>
      <Button>Get Started</Button>
      <Arrow
        xmlns="http://www.w3.org/2000/svg"
        height="2em"
        width="1em"
        fill="#fff"
        fontSize="20px"
        viewBox="0 0 384 512"
      >
        <path
          className="arrow"
          d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
        />
      </Arrow>
    </Container>
  );
};

export default HeroSection;
