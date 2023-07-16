import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Navitems = styled.div`
  display: none;
  @media (max-width: 480px) {
    position: absolute;
    top: 77px;
    bottom: 0;
    background-color: #85586f54;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    /* position: fixed; */
    z-index: 1;
    left: 0;
    width: 50%;
    transform: ${({ isHandlebarShown }) =>
      isHandlebarShown ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 4s ease-in-out 1s;
  }
`;
const Ul = styled.ul`
  z-index: 1;
  list-style: none;
  gap: 20px;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  margin-left: 30px;
`;

const Li = styled.li`
  cursor: pointer;
  font-size: x-large;
`;
const Bars = styled.div`
  display: none;
  @media (max-width: 480px) {
    display: block;
  }
`;

const MobNav = () => {
  const [isHandlebarShown, setIsHandlebarShown] = useState(false);
  const [isHandlebar, setHandleBar] = useState(true);
  const handleClick = () => {
    setIsHandlebarShown(!isHandlebarShown);
    setHandleBar(!isHandlebar);
  };
  return (
    <div>
      {isHandlebarShown ? (
        <Navitems isHandlebarShown={isHandlebarShown}>
          {/* <Image src={image} /> */}
          <Ul>
            <Li>Home</Li>
            <Li>Services</Li>
            <Li>Portfolio</Li>
            <Li>About Us</Li>
            <Li>Blog</Li>
            <Li>Contact</Li>
            <Li>Careers</Li>
          </Ul>
        </Navitems>
      ) : null}
      <Bars>
        {isHandlebar ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2em"
            fill="white"
            viewBox="0 0 448 512"
            onClick={handleClick}
          >
            <path
              className="handlebar"
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2em"
            fill="white"
            viewBox="0 0 384 512"
            onClick={handleClick}
          >
            <path
              className="close"
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            />
          </svg>
        )}
      </Bars>
    </div>
  );
};

export default MobNav;
