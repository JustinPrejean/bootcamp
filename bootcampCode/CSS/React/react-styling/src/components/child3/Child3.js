import React from "react";
import styled from "styled-components";

const Child3 = () => (
  <StyledDiv>
    <StyledP>I am the Child 3 component</StyledP>
  </StyledDiv>
);

const StyledDiv = styled.div`
  border: yellow solid 5px;
`;

const StyledP = styled.p`
  color: yellow;
`;

export default Child3;
