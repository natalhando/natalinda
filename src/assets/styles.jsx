import styled, { css, keyframes } from "styled-components";

export const AnimateBackground = keyframes`
  0% {
    transform: scaleY(1.2);
  }
  100% {
    transform: scaleY(1);
  }
`;

export const AnimateTrees = keyframes`
  0% {
    transform: translateY(400px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const keyboardFocus = css`
  :focus-visible {
    outline: 3px solid #9e4343;
    outline-offset: 4px;
  }
`;

export const NavWrapper = styled.div`
  background-color: #f1dade;
  display: block;
  position: fixed;
  width: 100vw;
  z-index: 11;
`;

export const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 16px 24px;
`;

export const StyledNavItem = styled.button`
  ${keyboardFocus}
  background: none;
  border: none;
  color: #b8475b;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  margin: 8px 12px;
  border-radius: 4px;

  ::after {
    content: "";
    border-bottom: 2px solid #b8475b;
    display: block;
    height: 8px;
    margin-left: -12px;
    opacity: 0;
    width: calc(100% + 24px);
  }

  &:hover {
    ::after {
      transition: all 0.4s;
      opacity: 1;
    }
  }

  ${({ isActive }) =>
    isActive &&
    css`
      ::after {
        opacity: 1;
      }
    `}
`;

const pageSizes = {
  home: "50vh",
  "about-me": "30vh",
  projects: "20vh",
};

export const StyledBackground = styled.div`
  background-image: radial-gradient(
    circle at center -50%,
    #ebcad0 20%,
    #f1dade 70%,
    #f1dade
  );
  bottom: 0;
  height: ${({ page }) => pageSizes[page]};
  position: fixed;
  width: 100vw;
  z-index: 7;

  ${({ page }) =>
    page !== "home" &&
    css`
      animation: ${AnimateBackground} 0.4s linear;
      animation-iteration-count: 1;
    `};
`;

export const StyledTrail = styled.svg`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${({ page }) => pageSizes[page]};
  z-index: 8;

  ${({ page }) =>
    page !== "home" &&
    css`
      animation: ${AnimateBackground} 0.4s linear;
      animation-iteration-count: 1;
    `};
`;

export const StyledTrees = styled.svg`
  bottom: 20px;
  width: 100%;
  height: 350px;
  position: fixed;
  z-index: 9;

  animation: ${AnimateTrees} 1s linear;
  animation-iteration-count: 1;
`;

export const StyledPage = styled.div`
  background-color: #f1dade;
  height: calc(100vh + 10px);
  z-index: 10;
`;

export const StyledBody = styled.div`
  padding-top: 10vh;
`;

export const StyledHeading1 = styled.h1`
  color: #b8475b;
  font-family: "Francois One";
  font-style: normal;
  line-height: 108px;
  font-size: 128px;
  text-transform: uppercase;
  text-align: center;
  position: absolute;
  bottom: 0;
  margin-bottom: 49vh;
  width: 100%;
  z-index: 9;

  @media screen and (max-width: 999px) {
    font-size: 90px;
    line-height: 72px;
  }

  @media screen and (max-width: 599px) {
    font-size: 64px;
    line-height: 52px;
  }
`;

const CardFloating = keyframes`
  0% {
    transform: translateY(0) rotate(-5deg);
  }
  50% {
    transform: translateY(10px) rotate(-5deg);
  }
  100% {
    transform: translateY(0) rotate(-5deg);
  }
`;

export const StyledCard = styled.div`
  background: rgba(255, 255, 255, 0.2);
  bottom: 0;
  border: 0.7px solid rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  height: 200px;
  margin-right: 200px;
  margin-bottom: 30vh;
  padding: 16px 24px;
  position: absolute;
  right: 0;
  width: 400px;
  z-index: 10;

  backdrop-filter: blur(5px);

  animation: ${CardFloating} 4s linear infinite;

  :before {
    content: url("assets/nps-logo.png");
    position: absolute;
    right: 0;
    width: 120px;
  }

  @media screen and (max-width: 1200px) {
    margin-bottom: 24vh;
  }

  @media screen and (max-width: 999px) {
    margin-bottom: 16vh;
    margin-right: 0;
    right: calc(50% - 240px);
  }

  @media screen and (max-width: 599px) {
    height: 160px;
    padding: 16px 24px;
    width: 240px;
    right: calc(50% - 140px);
  }

  @media screen and (max-height: 800px) {
    margin-bottom: 10vh;
  }

  @media screen and (max-height: 600px) {
    margin-bottom: 2vh;
  }
`;

export const StyledInfo = styled.div`
  position: absolute;
  bottom: 36px;
  :before {
    content: "Natalia Pinheiro";
    display: block;
    width: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    color: #b8475b;
  }

  :after {
    content: "Design & Engineering";
    display: block;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #b8475b;
    width: 100%;
  }

  @media screen and (max-width: 599px) {
    :before {
      font-size: 24px;
    }
    :after {
      font-size: 20px;
    }
  }
`;

export const StyledHeading2 = styled.h3`
  color: #6e2b36;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-size: 126px;
  font-weight: 900;
  line-height: 100px;
  margin-block: 0;
  margin-left: -8px;
  text-transform: uppercase;
  z-index: 9;

  @media screen and (max-width: 1300px) {
    font-size: 92px;
    line-height: 76px;
  }

  @media screen and (max-width: 699px) {
    font-size: 72px;
    line-height: 58px;
  }
`;

export const StyledHeading3 = styled.h3`
  color: #b8475b;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-size: 20px;
  font-weight: 100;
  z-index: 9;

  @media screen and (max-width: 699px) {
    font-size: 18px;
  }
`;

export const StyledParagraph = styled.p`
  color: #b8475b;
  font-family: "Inter";
  font-style: normal;
  font-size: 24px;
  font-weight: 300;
  z-index: 9;

  @media screen and (max-width: 1300px) {
    font-size: 20px;
  }

  @media screen and (max-width: 699px) {
    font-size: 18px;
  }

  a {
    color: #b8475b;
    font-weight: 800;
    text-decoration: none;
    ${keyboardFocus}

    :hover {
      text-decoration: underline;
    }
  }
`;

export const HorizontalStack = styled.div`
  column-gap: 40px;
  display: grid;
  grid-template-columns: auto 50%;
  padding: 160px 200px;
  position: relative;
  z-index: 12;

  @media screen and (max-width: 999px) {
    display: block;
    padding: 60px 120px;
  }

  @media screen and (max-width: 699px) {
    padding: 40px;
  }
`;

export const Stack = styled.div`
  display: inline-block;
`;

export const BubbleBelt = styled.div`
  display: flex;
  gap: 10px;
  padding: 36px 0;

  @media screen and (max-width: 699px) {
    gap: 6px;
  }
`;

export const StyledBubble = styled.span`
  background-color: transparent;
  border: 1.5px solid #b8475b;
  border-radius: 50px;
  box-sizing: border-box;
  color: #b8475b;
  gap: 10px;
  font-size: 18px;
  font-weight: 500;
  padding: 4px 16px;

  @media screen and (max-width: 699px) {
    border-width: 1px;
    font-weight: 400;
    padding: 4px 12px;
  }
`;

export const StyledProjects = styled.div`
  display: block;
  text-align: center;
  padding: 30vh 40px 0;

  ${StyledParagraph} {
    font-size: 20px;
  }
`;
