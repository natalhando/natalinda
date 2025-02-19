import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Shell from "../components/Shell/Shell";
import Project from "../components/Project/Project";
import Loader from "../components/Loader/Loader";
import { fetchProjects } from "../contentful";

const Ornament = styled.img.attrs({
  src: "assets/ornament.png",
  alt: "Ornament",
})`
  padding-top: 40px;
  width: 200px;
`;

const ProjectsLayout = styled.div`
  display: flex;
  margin-top: 200px;
  flex-direction: column;
  gap: 40px;
  height: calc(100vh - 24px - 40px);
  width: 40vw;

  @media screen and (max-width: 920px) {
    margin-top: 0;
    width: 80vw;
  }
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
          <Loader />
        ) : (
          projects
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((project) => (
              <Project
                key={project.key}
                title={project.title}
                description={project.shortDescription}
                technologies={project.tags}
                imageUrl={project.mainImage}
                link={`projects/${project.key}`}
                date={project.date}
                company={project.company}
              />
            ))
        )}
        <Ornament />
      </ProjectsLayout>
    </Shell>
  );
}

export default Projects;
