import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem";

const NavWrapper = styled.div`
  background-color: #1d1d1d;
  display: block;
  position: fixed;
  width: 30vw;
  height: 100vh;
  z-index: 11;
`;

const StyledNav = styled.nav`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  gap: 2px;
  margin: auto 80px;
  height: 100%;
  flex-direction: column;
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
