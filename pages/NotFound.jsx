import React from "react";
import styled from "styled-components";
import Shell from "../components/Shell/Shell";

const ProjectsLayout = styled.div`
  display: flex;
  margin-top: 200px;
  flex-direction: column;
  gap: 40px;
  height: calc(100vh - 24px - 40px);
  width: 40vw;
`;

const GIF = styled.img`
  width: 40vw;
`;

const LoadingText = styled.span`
  color: #f1dade;
  font-size: 80px;
`;

function NotFound() {
  return (
    <Shell>
      <ProjectsLayout>
        <LoadingText>Oh no! Can't find what you're looking for</LoadingText>
        <GIF src="assets/notfound.gif" alt="GIF of Zuko upset" />
      </ProjectsLayout>
    </Shell>
  );
}

export default NotFound;
