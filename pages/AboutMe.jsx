import React from "react";
import styled from "styled-components";
import Shell from "../components/Shell/Shell";

const Greeting = styled.span`
  color: #f1dade;
  font-family: "Berkshire Swash", serif;
  font-style: normal;
  font-size: 100px;
  font-weight: 900;
`;

const Text = styled.p`
  color: #f1dade;
  font-family: "Lato", serif;
  font-size: 24px;
  margin-block-start: 0;
  margin-block-end: 0;
`;

const Ornament = styled.img.attrs({
  src: "assets/ornament.png",
  alt: "Ornament",
})`
  padding-top: 40px;
  width: 200px;
`;

const Anchor = styled.a`
  color: #f1dade;
  font-family: "Lato", serif;
  font-size: 24px;
`;

const AboutMeLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  height: calc(100vh - 24px - 40px);
  width: 40vw;
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
          <Anchor href="https://carta.com/" target="_blank">
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
