import React from "react";
import styled from "styled-components";

const GIF = styled.img`
  width: 40vw;
`;

const LoadingText = styled.span`
  color: #f1dade;
  font-size: 80px;
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
