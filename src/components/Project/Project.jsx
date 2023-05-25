import React from "react";
import styled from "styled-components";
import { BubbleBelt, StyledBubble, StyledParagraph } from "../../assets/styles";

const StyledProject = styled.div`
  padding-bottom: 40px;
`;

const StyledImage = styled.img`
  height: 400px;
  border: 4px solid #b8475b;

  @media screen and (max-width: 699px) {
    width: 100%;
    height: unset;
  }
`;

function Project(props) {
  const { imageSrc, title, description, technologies, github, link } = props;

  const technologiesArray = technologies.split(", ");

  return (
    <StyledProject>
      <StyledImage src={imageSrc} alt={title} />
      <StyledParagraph>
        <a href={link}>
          <h2>{title}</h2>
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          Github ↗
        </a>

        <p>{description}</p>
      </StyledParagraph>
      <BubbleBelt>
        {technologiesArray.map((technology) => (
          <StyledBubble>{technology}</StyledBubble>
        ))}
      </BubbleBelt>
    </StyledProject>
  );
}

export default Project;
