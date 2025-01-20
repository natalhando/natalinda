import React from "react";
import styled from "styled-components";
import Shell from "../components/Shell/Shell";
import tokens from "../assets/tokens";

const Greeting = styled.span`
  color: ${tokens.bodyTextColor};
  font-family: "Berkshire Swash", serif;
  font-style: normal;
  font-size: 100px;
  font-weight: 900;

  @media screen and (max-width: 680px) {
    font-size: 60px;
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

const Ornament = styled.img.attrs({
  src: "assets/ornament.png",
  alt: "Ornament",
})`
  padding-top: 40px;
  width: 200px;
`;

const Anchor = styled.a`
  color: ${tokens.bodyTextColor};
  font-family: "Lato", serif;
  font-size: 24px;

  @media screen and (max-width: 680px) {
    font-size: 20px;
  }
`;

const AboutMeLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  height: calc(100vh - 64px);
  width: 40vw;

  @media screen and (max-width: 920px) {
    width: 80vw;
    height: 100%;
  }
`;

function AboutMe() {
  return (
    <Shell>
      <AboutMeLayout>
        <Greeting>Hey you</Greeting>
        <Text>
          I'm a writer, belly dancer and martial artist, and I'm passionate
          about art, music, cats and seeing the world. I work a day job as
          frontend software engineer at{" "}
          <Anchor
            href="https://carta.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Carta
          </Anchor>
          .
        </Text>
        <Text>
          I'm a multilingual computer scientist, born, raised & based in Brazil,
          and I have the cutest tabby cat named Zuko (yes, I'm an Avatar fan).
        </Text>
        <Text>
          Feel free to check my <Anchor href="/resume">resume</Anchor>, and{" "}
          <Anchor href="mailto:natalia_psilva@outlook.com">
            connect with me
          </Anchor>
          .
        </Text>
        <Ornament />
      </AboutMeLayout>
    </Shell>
  );
}

export default AboutMe;
