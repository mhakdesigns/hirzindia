import React from "react";
import styled from "styled-components";
import image from "../img/us.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  @media (max-width: 480px) {
    /* height: 120vh; */
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const About = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 80px 50px 0;
  @media (max-width: 480px) {
    margin: 0 ;
    color: #774c63;
  }
`;

const Aboutus = styled.p`
  text-align: left;
  flex: 1;
  line-height: 35px;
  font-size: 25px;
  @media (max-width: 480px) {
    display: none;
  }
`;
const Aboutus1 = styled.p`
  display: none;
  @media (max-width: 480px) {
    font-size: 15px;
    display: block;
    margin: 20px;
    font-weight: 500;
  }
`;

const Image = styled.img`
  flex: 1;
  align-items: center;
  justify-content: center;
  @media (max-width: 480px) {
    display: none;
  }
`;

const AboutUs = () => {
  return (
    <Container>
      <About>About Us</About>
      <div style={{ display: "flex" }}>
        <Image src={image} />
        <Content>
          <Aboutus>
            Welcome to your <b style={{ color: " #774c63" }}>webmate!</b> With a
            proud history spanning over three years, <br />
            we have amassed extensive expertise in the fields of web
            development, <br />
            translation, and content creation. Our dedicated team of highly
            talented <br />
            and experienced professionals brings passion and skill to every
            project <br />
            we undertake. With a total workforce of 20+ individuals, we
            collaborate <br />
            closely to deliver exceptional results that exceed client
            expectations. <br />
            At our company, we uphold a steadfast belief in the power of
            quality. <br />
            Guided by our motto, ‘We prefer quality over money,’ we prioritize{" "}
            <br />
            delivering exceptional work that showcases the utmost craftsmanship,{" "}
            <br />
            attention to detail, and client satisfaction. We understand that
            your <br />
            success is our success, and we strive to go above and beyond to
            ensure <br />
            your goals are not just met but surpassed. Whether you need a <br />
            captivating website, accurate translations, or engaging content, we
            are <br />
            here to bring your vision to life. Join us on this journey, where
            our <br />
            commitment to excellence and dedication to quality will drive your{" "}
            <br />
            business forward.
          </Aboutus>
          <Aboutus1>
            Welcome to your <b style={{ color: " #774c63" }}>webmate!</b> With a
            proud history spanning over three years, we have amassed extensive
            expertise in the fields of web development, translation, and content
            creation. Our dedicated team of highly talented and experienced
            professionals brings passion and skill to every project we
            undertake. With a total workforce of 20+ individuals, we collaborate
            closely to deliver exceptional results that exceed client
            expectations. At our company, we uphold a steadfast belief in the
            power of quality. Guided by our motto, ‘We prefer quality over
            money,’ we prioritize delivering exceptional work that showcases the
            utmost craftsmanship, attention to detail, and client satisfaction.
            We understand that your success is our success, and we strive to go
            above and beyond to ensure your goals are not just met but
            surpassed. Whether you need a captivating website, accurate
            translations, or engaging content, we are here to bring your vision
            to life. Join us on this journey, where our commitment to excellence
            and dedication to quality will drive your business forward.
          </Aboutus1>
        </Content>
      </div>
    </Container>
  );
};

export default AboutUs;
