import React from "react";
import styled from "styled-components";

const CopyRight = styled.div`
  width: 90vw;
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
const Copy = () => {
  return (
    <div>
      <CopyRight>
        <a href=""> Copyright All rights reserved.</a>
      </CopyRight>
    </div>
  );
};

export default Copy;
