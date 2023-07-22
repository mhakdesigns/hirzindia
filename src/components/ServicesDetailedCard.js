import React from "react";
import styled from "styled-components";

const Card = styled.div`
  /* background-color: #; */
  border: none;
  width: 400px;
  height: 400px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  cursor: pointer;
  border: 1px solid #e1e1e1;
  &:hover {
    transform: scale(1.01);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
  @media (max-width: 480px) {
    width: 400px;
  height: 400px;
  }
`;

const Title = styled.h3`
  text-align: center;
  font-size: 15px;
  @media (max-width: 480px) {
    padding: 0 10px 10px 10px;
  }
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  align-self: center;
`;
const Desc = styled.h5`
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    margin-top: 50px;
`;

const ServicesDetailedCard = ({ title, img, desc }) => {
  return (
    <Card>
      <Image src={img} />
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </Card>
  );
};

export default ServicesDetailedCard;
