import React from "react";
import styled from "styled-components";
import Shell from "../components/Shell/Shell";
import tokens from "../assets/tokens";

const NotFoundLayout = styled.div`
  display: flex;
  margin-top: 200px;
  flex-direction: column;
  gap: 40px;
  height: calc(100vh - 24px - 40px);
  width: 40vw;
`;

const GIF = styled.img`
  width: 40vw;
`;

const Text = styled.span`
  color: ${tokens.bodyTextColor};
  font-size: 80px;
`;

function NotFound() {
  return (
    <Shell>
      <NotFoundLayout>
        <Text>Oh no! Can't find what you're looking for</Text>
        <GIF src="assets/notfound.gif" alt="GIF of Zuko upset" />
      </NotFoundLayout>
    </Shell>
  );
}

export default NotFound;
