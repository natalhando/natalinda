import React from "react";
import styled from "styled-components";
import tokens from "../../assets/tokens";

const StyledShell = styled.div`
  background-color: ${tokens.backgroundColor};
  margin: 0 30vw;
  padding-left: 20px;
  width: 64vw;
  height: 100vh;

  @media screen and (max-width: 920px) {
    margin: 0 80px;
  }

  @media screen and (max-width: 680px) {
    margin: 40px 20px 0;
    width: 80vw;
    height: calc(100vh - 200px);
  }
`;

const StyledLinks = styled.div`
  display: flex;
  gap: 24px;
  padding-top: 40px;

  @media screen and (max-width: 920px) {
    display: none;
  }
`;

const StyledLink = styled.a`
  color: ${tokens.bodyTextColor};
  cursor: pointer;
  font-size: 20px;
`;

const SideOrnament = styled.img.attrs({
  src: "../assets/drawings.png",
  alt: "Ornament",
})`
  position: fixed;
  z-index: 100;
  top: 0;
  right: 4px;
  height: 100vh;

  @media screen and (max-width: 920px) {
    display: none;
  }
`;

function Shell({ children }) {
  return (
    <StyledShell>
      <StyledLinks>
        <StyledLink
          href="https://www.linkedin.com/in/pinheiro-natalia/?locale=en_US"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </StyledLink>
        <StyledLink
          href="https://github.com/natalhando"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </StyledLink>
        <StyledLink href="mailto:natalia_psilva@outlook.com">
          Contact
        </StyledLink>
      </StyledLinks>
      {children}
      <SideOrnament />
    </StyledShell>
  );
}

export default Shell;
