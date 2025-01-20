import React from "react";
import styled from "styled-components";
import Shell from "../components/Shell/Shell";
import tokens from "../assets/tokens";

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FirstName = styled.span`
  color: ${tokens.bodyTextColor};
  font-family: "Berkshire Swash", serif;
  font-style: normal;
  font-size: 200px;
  font-weight: 900;
  line-height: 160px;

  @media screen and (max-width: 1200px) {
    font-size: 180px;
    line-height: 140px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 160px;
    line-height: 140px;
  }

  @media screen and (max-width: 680px) {
    font-size: 100px;
    line-height: 80px;
  }
`;

const FamilyName = styled.span`
  color: ${tokens.bodyTextColor};
  font-family: "Bebas Neue", serif;
  font-size: 230px;
  text-transform: uppercase;
  line-height: 200px;

  @media screen and (max-width: 1200px) {
    font-size: 210px;
    line-height: 180px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 186px;
    line-height: 150px;
  }

  @media screen and (max-width: 680px) {
    font-size: 116px;
    line-height: 100px;
  }
`;

const TagLine = styled.span`
  color: ${tokens.bodyTextColor};
  font-family: "Lato", serif;
  font-size: 68px;
  text-transform: uppercase;

  @media screen and (max-width: 1200px) {
    font-size: 62px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 54px;
  }

  @media screen and (max-width: 680px) {
    font-size: 34px;
  }
`;

const Ornament = styled.img.attrs({
  src: "assets/ornament.png",
  alt: "Ornament",
})`
  padding-top: 40px;
  width: 200px;
`;

const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  height: calc(100vh - 24px - 40px);

  @media screen and (max-width: 680px) {
    gap: 8px;
    height: 100%;
  }
`;

const Name = ({ firstName, familyName }) => {
  return (
    <NameWrapper>
      <FirstName>{firstName}</FirstName>
      <FamilyName>{familyName}</FamilyName>
    </NameWrapper>
  );
};

function Home() {
  return (
    <Shell>
      <HomeLayout>
        <Name firstName="Natalia" familyName="Pinheiro" />
        <TagLine>Artist & Engineer</TagLine>
        <Ornament src="assets/ornament.png" alt="Ornament" />
      </HomeLayout>
    </Shell>
  );
}

export default Home;
