import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import tokens from "../../assets/tokens";

const Title = styled.h2`
  color: ${tokens.bodyTextColor};
  font-family: "Lato", serif;
  font-size: 20px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 300;

  @media screen and (max-width: 680px) {
    font-size: 18px;
    margin-block-end: 0;
  }
`;

const Date = styled.span`
  color: ${tokens.bodyTextColor};
  font-size: 14px;
`;

const Description = styled.p`
  color: ${tokens.secondaryTextColor};
  font-family: "Lato", serif;
  font-size: 18px;
  margin-block-start: 0;
  margin-block-end: 0;

  @media screen and (max-width: 680px) {
    font-size: 16px;
  }
`;

const StyledBlogpost = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-decoration: none;
  position: relative;

  &:hover {
    cursor: pointer;

    ${Title}, ${Date} {
      color: ${tokens.highlightTextColor};
    }
  }
`;

const Spread = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;

  @media screen and (max-width: 680px) {
    gap: 4px;
  }
`;

function Blogpost(props) {
  const {
    key,
    title,
    link,
    description,
    date,
  } = props;

  return (
    <React.Fragment key={key}>
      <StyledBlogpost
        to={`/${link}`}
      >
        <Spread>
          <Title>{title}</Title>
          <Date>{date}</Date>
        </Spread>

          <Description>{description}</Description>
      </StyledBlogpost>
    </React.Fragment>
  );
}

export default Blogpost;
