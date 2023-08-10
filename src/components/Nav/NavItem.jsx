import React from "react";
import { StyledNavItem } from "../../assets/styles";

function NavItem(props) {
  const { label, path, ...otherProps } = props;
  return (
    <StyledNavItem to={path} {...otherProps}>
      {label}
    </StyledNavItem>
  );
}

NavItem.defaultProps = {
  path: "/",
};

export default NavItem;
