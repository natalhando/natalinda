import React from "react";
import { StyledNavItem } from "../../assets/styles";

function NavItem(props) {
  const { label, ...otherProps } = props;
  return <StyledNavItem {...otherProps}>{label}</StyledNavItem>;
}

export default NavItem;
