import React, { useState, useEffect } from "react";
import Project from "../components/Project/Project";
import {
  StyledPage,
  StyledBody,
  StyledProjects,
  StyledHeading3,
  StyledHeading4,
  HorizontalStack,
  Stack,
  StyledMeiaNoites,
  MeiaNoiteWrapper,
} from "../assets/styles";

const contentful = require("contentful");

const client = contentful.createClient({
  space: "fd5935cudoxf",
  environment: "master",
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

function Projects() {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      client
        .getEntries()
        .then((response) => {
          setProjects(response.items);
          setLoading(false);
        })
        .catch(console.error);
    };

    fetchData();
  }, []);

  return (
    <>
      <StyledPage id="home">
        <StyledBody>
          {loading ? (
            <HorizontalStack>
              <Stack>
                <MeiaNoiteWrapper>
                  <StyledMeiaNoites
                    src="assets/meia-noite.png"
                    alt="Cat looking for Natalia's projects"
                  />

                  <StyledMeiaNoites
                    src="assets/meia-noite.png"
                    alt="Cat looking for Natalia's projects"
                  />

                  <StyledMeiaNoites
                    src="assets/meia-noite.png"
                    alt="Cat looking for Natalia's projects"
                  />
                </MeiaNoiteWrapper>
                <StyledHeading3>Wait a sec!</StyledHeading3>
                <StyledHeading4>
                  Meia noite is helping me find them.
                </StyledHeading4>
              </Stack>
            </HorizontalStack>
          ) : (
            <StyledProjects>
              {projects?.map((project) => (
                <Project
                  imageSrc={`https:${project.fields.screenshot.fields.file.url}`}
                  title={project.fields.title}
                  description={project.fields.description}
                  technologies={project.fields.technologies}
                  github={project.fields.github}
                  link={project.fields.link}
                  key={project.fields.title}
                />
              ))}
            </StyledProjects>
          )}
        </StyledBody>
      </StyledPage>
    </>
  );
}

export default Projects;
