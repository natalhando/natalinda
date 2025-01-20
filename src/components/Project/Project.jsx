import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h2`
  color: #f1dade;
  font-family: "Lato", serif;
  font-size: 20px;
  text-transform: uppercase;
  text-decoration: none;
`;

const Year = styled.span`
  color: #f1dade;
  font-size: 14px;
`;

const Company = styled.span`
  color: #f1dade;
  font-size: 14px;
  text-transform: uppercase;
`;

const Description = styled.p`
  color: #ffffff;
  font-family: "Lato", serif;
  font-size: 18px;
  margin-block-start: 0;
  margin-block-end: 0;
`;

const Belt = styled.div`
  display: flex;
  gap: 4px;
  padding-bottom: 10px;
`;

const Spread = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
`;

const Hashtag = styled.span`
  color: #ffffff;
`;

const Tag = styled.span`
  color: #f1dade;
  font-family: "Lato", serif;
  font-size: 16px;
  font-weight: 500;
`;

const StyledProject = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-decoration: none;

  &:hover {
    cursor: pointer;

    ${Title}, ${Year} {
      color: #f091a1;
    }
  }
`;

function Project(props) {
  const { title, description, technologies = [], link, date, company } = props;

  return (
    <StyledProject to={`/${link}`}>
      <Spread>
        <Title>{title}</Title>
        <Year>{date}</Year>
      </Spread>

      <Spread>
        <Description>{description}</Description>
        <Company>{company}</Company>
      </Spread>

      <Belt>
        {technologies.map((technology) => (
          <Tag>
            <Hashtag>#</Hashtag>
            {technology}
          </Tag>
        ))}
      </Belt>
    </StyledProject>
  );
}

export default Project;
