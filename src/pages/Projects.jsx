import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Shell from "../components/Shell/Shell";
import Project from "../components/Project/Project";
import { fetchProjects } from "../contentful";

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

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { entries, isLoading } = await fetchProjects();
      setLoading(isLoading);
      setProjects(entries);
    };

    fetchData();
  }, []);

  return (
    <Shell>
      <ProjectsLayout>
        {loading ? (
          <>
            <LoadingText>
              Grabbing the latest projects from the spirit world...
            </LoadingText>
            <GIF
              src="assets/waiting.gif"
              alt="GIF of Zuko impatiently waiting"
            />
          </>
        ) : (
          projects
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((project) => (
              <Project
                key={project.key}
                title={project.title}
                description={project.shortDescription}
                technologies={project.tags}
                link={project.key}
                date={project.date}
                company={project.company}
              />
            ))
        )}
      </ProjectsLayout>
    </Shell>
  );
}

export default Projects;
