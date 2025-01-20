import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchProjectTitleByKey } from "../../contentful";

const Breadcrumb = styled.span`
  font-style: italic;

  @media screen and (max-width: 920px) {
    display: none;
  }
`;

const StyledNavItem = styled(Link)`
  background: none;
  border: none;
  color: #f1dade;
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
      color: #f091a1;

      ${Breadcrumb} {
        color: #f1dade;
      }
    `}
`;

function NavItem(props) {
  const { label, path = "/", nested, isActive, ...otherProps } = props;
  const [breadcrumb, setBreadcrumb] = useState(null);
  const { projectId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProjectTitleByKey(projectId);
      setBreadcrumb(data);
    };

    if (nested) {
      fetchData();
    }
  }, [projectId, nested]);

  return (
    <StyledNavItem to={path} isActive={isActive} {...otherProps}>
      {label}
      <Breadcrumb>
        {breadcrumb && projectId && nested && ` / ${breadcrumb}`}
      </Breadcrumb>
    </StyledNavItem>
  );
}

export default NavItem;
