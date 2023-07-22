import styled from "styled-components";
import NavItems from "./NavItems";
import MobNav from "./MobNav";

const Nav = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
  background-color: #6d7993;
  background-color: #2f3542;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  @media (max-width: 480px) {
    border-radius: 0;
    margin: 0;
  }
  &:hover {
    background-color: #774c63;
  }
`;

const Section = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  cursor: pointer;
  color: #fff;
  color: #f8ede3;
  margin-left: -10px;
  width: max-content;
  padding: 10px;
  border-radius: 5px;
`;
const Header = () => {
  return (
    <Nav className="nav">
      <Section className="sec1">
        <Logo>HirzIndia</Logo>
      </Section>
      <NavItems />
      <MobNav />
    </Nav>
  );
};

export default Header;
