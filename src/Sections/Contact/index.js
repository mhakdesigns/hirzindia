import React, { useState, useRef } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import Instagram from "../../assets/instagram-square-brands.svg";
import Facebook from "../../assets/facebook-square-brands.svg";

const ContactSection = styled.section`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: #0a0b10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    border-bottom: 2px solid var(--pink);
  }
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 3rem;
  a {
    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
          brightness(100%) contrast(97%);
      }
    }
    &:not(:last-child) {
      margin-right: 2rem;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
    &[name="name"] {
      margin-right: 2rem;
    }
  }
  textarea {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    margin-bottom: 2rem;
    &:focus,
    &:active {
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
  }
  button {
    padding: 0.8rem 2rem;
    background-color: var(--white);
    border-radius: 20px;
    font-size: 1.2rem;
    color: #0a0b10;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

const Row = styled.div`
  @media only Screen and (max-width: 40em) {
    display: flex;
    flex-direction: column;
    input {
      &[name="name"] {
        margin-right: 0;
      }
    }
  }
`;

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setNotDone(true);
    } else {
      emailjs
        .sendForm(
          "service_40615ow",
          "template_l5jnpjn",
          form.current,
          "IvGNQgrXsqZzC8ySh"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <ContactSection id="contact">
      <Title>Get in touch</Title>
      <Icons>
        <a href="https://www.facebook.com/">
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/partho.info/">
          <img src={Instagram} alt="Instagram" />
        </a>
      </Icons>
      <Form ref={form} onSubmit={sendEmail}>
        <Row>
          <input
            name="name"
            type="text"
            placeholder="Your name"
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </Row>
        <textarea
          name="message"
          cols="30"
          rows="2"
          placeholder="Your message"
          onChange={handleChange}
        ></textarea>
        <div style={{ margin: "0 auto" }}>
          <button type="submit">Submit</button>
        </div>
        {notDone && (
          <span className="not-done">Please fill in all the input fields.</span>
        )}
        {done && (
          <span style={{ color: "green", paddingTop: "10px" }}>
            Thanks for contacting Us. We have received your message. If you have
            any further inquiries, our team will contact asap.
          </span>
        )}
      </Form>
    </ContactSection>
  );
};

export default Contact;
