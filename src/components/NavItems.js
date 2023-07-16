import React from "react";
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
  &:hover{
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
        <Li>Home</Li>
        <Li>Services</Li>
        <Li>Portfolio</Li>
        <Li>About Us</Li>
        <Li>Blog</Li>
        <Li>Careers</Li>
        <Li style={{ border: "1px solid grey" }}>Contact</Li>
      </Ul>
    </Navitems>
  );
};

export default NavItems;
