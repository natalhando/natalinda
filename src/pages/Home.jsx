import React from "react";
import styled from "styled-components";
import Shell from "../components/Shell/Shell";

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FirstName = styled.span`
  color: #f1dade;
  font-family: "Berkshire Swash", serif;
  font-style: normal;
  font-size: 200px;
  font-weight: 900;
  line-height: 160px;
`;

const FamilyName = styled.span`
  color: #f1dade;
  font-family: "Bebas Neue", serif;
  font-size: 230px;
  text-transform: uppercase;
  line-height: 200px;
`;

const TagLine = styled.span`
  color: #f1dade;
  font-family: "Lato", serif;
  font-size: 68px;
  text-transform: uppercase;
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
