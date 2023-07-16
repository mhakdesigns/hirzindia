import React from "react";
import styled from "styled-components";
import logo from "../assets/hlogob.png";

const Container = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
`;
const Sec2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  margin-left: 500px;
  @media (max-width: 480px) {
  }
`;
const Sec1 = styled.div`
  margin-bottom: 50px;
`;
const Logo = styled.img`
  flex: 1;
  height: 220px;
  width: 220px;
  @media (max-width: 480px) {
    height: 110px;
    width: 110px;
  }
`;
const Ul = styled.ul`
  display: flex;
  list-style: none;
  gap: 5px;
  display: flex;
  flex-direction: column;
  column-count: 6;
  flex-flow: wrap column;
`;

const Li = styled.li`
  cursor: pointer;
  padding: 10px;
  color: #fff;
  &:hover {
    text-decoration: underline;
  }
  a {
    color: #fff;
  }
`;
const Navitems = styled.div`
  margin: 10px 50px;
  margin-bottom: 0;
  @media (max-width: 480px) {
    display: none;
  }
`;
const Navitems2 = styled.div`
  margin: 10px 50px;
  margin-bottom: 0;
  @media (max-width: 480px) {
    /* display: none; */
  }
`;
const NavH = styled.h3`
  color: white;
  margin-left: 10px;
`;
const CopyRight = styled.div`
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 50px;
  background-color: #80808060;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    color: white;
    font-size: small;
  }
`;
const Company = styled.div`
  position: absolute;
  background-color: #DFD3C3;
  /* top: 0; */
  bottom: 100px;
  left: 250px;
  width: 300px;
  height: 300px;
  h4 {
    text-align: center;
    color: #fff;
  }

  @media (max-width: 480px) {
    bottom: 300px;
    left: 10px;
    width: 200px;
    height: 200px;
  }
`;
const Footer = () => {
  return (
    <Container>
      <Sec1>
        <Company>
          <Logo src={logo} />
          <h4>"We Prefer Quality Over Money"</h4>
        </Company>
      </Sec1>
      <Sec2>
        <Navitems>
          <NavH>Our services</NavH>
          <Ul>
            <Li>Web Development</Li>
            <Li>Translation</Li>
            <Li> Content Creation</Li>
            <Li>(SEO)</Li>
            <Li>Social Media Management</Li>
            <Li>Copywriting and Editing</Li>
          </Ul>
        </Navitems>
        <Navitems>
          <Ul>
            <Li style={{ color: "black" }}> E-commerce Solutions</Li>
            <Li> E-commerce Solutions</Li>
            <Li>Digital Marketing</Li>
            <Li>Mobile App Development</Li>
            <Li>Virtual Assistant Services</Li>
            <Li>Online Advertising & PPC</Li>
            <Li style={{ color: "black" }}> E-commerce Solutions</Li>
          </Ul>
        </Navitems>
        <Navitems2>
          <NavH>Contact</NavH>
          <Ul>
            <Li>
              <a href="">+9100000000</a>
            </Li>
            <Li>
              <a href="">+9100000000</a>
            </Li>
            <Li>
              <a href="mailto:hirzindia@gmail.com">hirzindia@gmail.com</a>
            </Li>
            <Li>
              <a href="">kerala,India</a>
            </Li>
            <Li style={{ color: "black" }}> E-commerce Solutions</Li>
          </Ul>
        </Navitems2>
      </Sec2>
      <CopyRight>
        <a href=""> Copyright All rights reserved.</a>
      </CopyRight>
    </Container>
  );
};

export default Footer;
