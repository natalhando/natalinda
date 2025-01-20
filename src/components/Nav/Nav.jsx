import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem";
import tokens from "../../assets/tokens";

const NavWrapper = styled.div`
  background-color: ${tokens.backgroundColor};
  display: block;
  position: fixed;
  width: 30vw;
  height: 100vh;
  z-index: 11;

  @media screen and (max-width: 920px) {
    display: flex;
    height: unset;
    position: unset;
  }
`;

const StyledNav = styled.nav`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  gap: 2px;
  margin: auto 80px;
  height: 100%;
  flex-direction: column;

  @media screen and (max-width: 920px) {
    flex-direction: row;
    gap: 16px;
    margin: 40px 100px;
  }

  @media screen and (max-width: 680px) {
    margin: 40px 40px;
  }
`;

function Nav(props) {
  const { children, ...otherProps } = props;
  return (
    <NavWrapper>
      <StyledNav {...otherProps}>{children}</StyledNav>
    </NavWrapper>
  );
}

Nav.Item = NavItem;

export default Nav;
