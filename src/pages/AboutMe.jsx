import React from "react";
import {
  StyledPage,
  Stack,
  StyledHeading2,
  StyledHeading4,
  StyledBody,
  BubbleBelt,
  StyledBubble,
  HorizontalStack,
  StyledParagraph,
} from "../assets/styles";

function AboutMe() {
  return (
    <>
      <StyledPage id="about-me">
        <StyledBody>
          <HorizontalStack>
            <Stack>
              <StyledHeading4>Hi, my name is</StyledHeading4>
              <StyledHeading2>
                Natalia
                <br />
                Pinheiro
              </StyledHeading2>
              <BubbleBelt>
                <StyledBubble>Designer</StyledBubble>
                <StyledBubble>Engineer</StyledBubble>
                <StyledBubble>Writer</StyledBubble>
              </BubbleBelt>
            </Stack>
            <Stack>
              <StyledParagraph>
                I'm currently working as a Design Technologist at{" "}
                <a target={"_blank"} rel="noreferrer" href="https://carta.com/">
                  Carta
                </a>
                , building and maintaining the company's design system{" "}
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://ink.carta.com/"
                >
                  ink
                </a>
                .
                <br />
                <br />
                I'm a multilingual computer scientist, you can talk to me about
                code, design, cats and traveling in Portuguese, English or
                Spanish.
                <br />
                <br />
                Trying to make things happen with a bit of enthusiasm, bias to
                action and sense of humor.
              </StyledParagraph>
            </Stack>
          </HorizontalStack>
        </StyledBody>
      </StyledPage>
    </>
  );
}

export default AboutMe;
