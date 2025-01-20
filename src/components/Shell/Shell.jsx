import React from "react";
import styled from "styled-components";

const tokens = {
  backgroundColor: "#1d1d1d",
  bodyTextColor: "#F1DADE",
};

const StyledShell = styled.div`
  background-color: ${tokens.backgroundColor};
  margin: 0 30vw;
  padding-left: 20px;
  width: 64vw;
  height: 100vh;
`;

const StyledLinks = styled.div`
  display: flex;
  gap: 24px;
  padding-top: 40px;
`;

const StyledLink = styled.a`
  color: ${tokens.bodyTextColor};
  cursor: pointer;
  font-size: 20px;
`;

const SideOrnament = styled.img.attrs({
  src: "assets/drawings.png",
  alt: "Ornament",
})`
  position: fixed;
  z-index: 100;
  top: 0;
  right: 4px;
  height: 100vh;
`;

function Shell({ children }) {
  return (
    <StyledShell>
      <StyledLinks>
        <StyledLink
          href="https://www.linkedin.com/in/pinheiro-natalia/?locale=en_US"
          target="_blank"
        >
          Linkedin
        </StyledLink>
        <StyledLink href="https://github.com/natalhando" target="_blank">
          Github
        </StyledLink>
        <StyledLink href="mailto:natalia_psilva@outlook.com">Email</StyledLink>
      </StyledLinks>
      {children}
      <SideOrnament />
    </StyledShell>
  );
}

export default Shell;
