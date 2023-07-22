import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 20px;
  text-align: center;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

const Copyright = styled.p`
  font-size: 12px;
  margin-top: 10px;
`;

const Contact = styled.p`
  margin-top: 20px;
`;

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();
  const companyName = "Your Company Name";

  return (
    <Footer>
      <Copyright>Copyright © {currentYear} {companyName}</Copyright>
      <Contact>
        <p>Contact us:</p>
        <a href="mailto:hirzindia@gmail.com">hirzindia@gmail.com </a>
        <a href="tel:+919656169107">   +91 965 616 9107</a>
      </Contact>
    </Footer>
  );
};

export default FooterComponent;
