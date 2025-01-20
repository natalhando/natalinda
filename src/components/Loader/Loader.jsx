import React from "react";
import styled from "styled-components";
import tokens from "../../assets/tokens";

const GIF = styled.img`
  width: 40vw;

  @media screen and (max-width: 920px) {
    width: 80vw;
  }
`;

const LoadingText = styled.span`
  color: ${tokens.bodyTextColor};
  font-size: 80px;

  @media screen and (max-width: 920px) {
    font-size: 40px;
  }
`;

function Loader() {
  return (
    <>
      <LoadingText>Loading...</LoadingText>
      <GIF src="assets/waiting.gif" alt="GIF of Zuko impatiently waiting" />
    </>
  );
}

export default Loader;
