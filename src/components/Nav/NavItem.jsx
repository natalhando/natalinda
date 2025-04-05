import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Link, useParams } from "react-router-dom";
import tokens from "../../assets/tokens";

const Breadcrumb = styled.span`
  font-style: italic;

  @media screen and (max-width: 920px) {
    display: none;
  }
`;

const StyledNavItem = styled(Link)`
  background: none;
  border: none;
  color: ${tokens.bodyTextColor};
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  margin: 8px 0;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    transition: all 0.4s;
    transform: translateX(4px);

    @media screen and (max-width: 920px) {
      transform: unset;
    }
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${tokens.highlightTextColor};

      ${Breadcrumb} {
        color: ${tokens.bodyTextColor};
      }
    `}
`;

function NavItem(props) {
  const { label, path = "/", nested, isActive, ...otherProps } = props;
  const [breadcrumb, setBreadcrumb] = useState(null);
  const { projectId, blogPostId } = useParams();

  useEffect(() => {
    if (blogPostId || projectId) {
      setBreadcrumb(blogPostId ?? projectId);
    }
  }, [projectId, blogPostId]);

  return (
    <StyledNavItem to={path} isActive={isActive} {...otherProps}>
      {label}
      <Breadcrumb>
        {breadcrumb && nested && ` / ${breadcrumb}`}
      </Breadcrumb>
    </StyledNavItem>
  );
}

export default NavItem;
