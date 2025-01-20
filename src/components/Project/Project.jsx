import React, { useState } from "react";
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

const Year = styled.span`
  color: ${tokens.bodyTextColor};
  font-size: 14px;
`;

const Company = styled.span`
  color: ${tokens.bodyTextColor};
  font-size: 14px;
  text-transform: uppercase;
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

const Belt = styled.div`
  display: flex;
  gap: 4px;
  padding-bottom: 10px;

  @media screen and (max-width: 680px) {
    padding-bottom: 40px;
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

const Hashtag = styled.span`
  color: ${tokens.secondaryTextColor};
`;

const Tag = styled.span`
  color: ${tokens.bodyTextColor};
  font-family: "Lato", serif;
  font-size: 16px;
  font-weight: 500;
`;

const StyledProject = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-decoration: none;
  position: relative;

  &:hover {
    cursor: pointer;

    ${Title}, ${Year} {
      color: ${tokens.highlightTextColor};
    }
  }
`;

const HoverImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: auto;
  pointer-events: none;
  transform: translate(20px, 20px);
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: 20;
`;

function Project(props) {
  const {
    title,
    description,
    technologies = [],
    link,
    date,
    company,
    imageUrl = "assets/hover.png",
  } = props;
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.pageX, y: e.pageY });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <>
      <HoverImage
        src={imageUrl}
        style={{
          top: cursorPosition.y,
          left: cursorPosition.x,
        }}
        isVisible={isHovering}
      />
      <StyledProject
        to={`/${link}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
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
            <Tag key={technology}>
              <Hashtag>#</Hashtag>
              {technology}
            </Tag>
          ))}
        </Belt>
      </StyledProject>
    </>
  );
}

export default Project;
