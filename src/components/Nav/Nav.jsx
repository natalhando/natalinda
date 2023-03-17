import React from "react";
import { StyledNav, NavWrapper } from "../../assets/styles";
import NavItem from "./NavItem";

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
