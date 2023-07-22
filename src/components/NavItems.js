import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
`;

const Li = styled.li`
  cursor: pointer;
  padding: 10px;
  color: #f8ede3;
  &:hover {
    text-decoration: underline;
  }
`;
const Navitems = styled.div`
  @media (max-width: 480px) {
    display: none;
  }
`;
const NavItems = () => {
  return (
    <Navitems>
      <Ul>
        <Link to="/">
          <Li>Home</Li>
        </Link>
        <Link to="/services">
          <Li>Services</Li>
        </Link>
        <Link to="/portfolio">
          <Li>Portfolio</Li>
        </Link>
        <Link to="/aboutUs">
          <Li>About Us</Li>
        </Link>

        <Link to="/blog">
          <Li>Blog</Li>
        </Link>
        <Link to="/careers">
          <Li>Careers</Li>
        </Link>

        <Link to="/contact">
          <Li style={{ border: "1px solid grey" }}>Contact</Li>
        </Link>
      </Ul>
    </Navitems>
  );
};

export default NavItems;
