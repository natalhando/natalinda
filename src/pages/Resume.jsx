import React from "react";
import styled from "styled-components";
import Shell from "../components/Shell/Shell";
import tokens from "../assets/tokens";

const ResumeLayout = styled.div`
  display: flex;
  margin-top: 200px;
  flex-direction: column;
  gap: 40px;
  height: calc(100vh - 24px - 40px);
  width: 40vw;

  @media screen and (max-width: 920px) {
    margin-top: 0;
    width: 80vw;
  }
`;

const Text = styled.p`
  color: ${tokens.bodyTextColor};
  font-family: "Lato", serif;
  font-size: 24px;
  margin-block-start: 0;
  margin-block-end: 0;

  @media screen and (max-width: 680px) {
    font-size: 20px;
  }
`;

const Anchor = styled.a`
  color: ${tokens.bodyTextColor};
  font-family: "Lato", serif;
  font-size: 24px;

  @media screen and (max-width: 680px) {
    font-size: 20px;
  }
`;

function Home() {
  return (
    <Shell>
      <ResumeLayout>
        <object
          data="assets/resume.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
          aria-label="Resume PDF"
        >
          <Text>
            Seems like I'm having trouble loading the PDF.{" "}
            <Anchor href="assets/resume.pdf">Check my resumé!</Anchor>
          </Text>
        </object>
      </ResumeLayout>
    </Shell>
  );
}

export default Home;
