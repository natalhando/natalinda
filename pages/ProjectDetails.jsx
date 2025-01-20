import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Shell from "../components/Shell/Shell";
import Loader from "../components/Loader/Loader";
import { fetchProjectByKey } from "../contentful";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ProjectLayout = styled.div`
  display: flex;
  margin-top: 200px;
  flex-direction: column;
  gap: 10px;
  height: calc(100vh - 24px - 40px);
  width: 40vw;
`;

const Title = styled.h1`
  color: #f1dade;
  font-family: "Lato", serif;
  font-size: 64px;
  margin-block-start: 0;
  margin-block-end: 0;
`;

const Image = styled.img.attrs({ alt: "Project Image" })`
  width: 100%;
`;

const Anchor = styled.a`
  color: #f1dade;
  font-family: "Lato", serif;
  font-size: 24px;
`;

const Description = styled.p`
  color: #ffffff;
  font-family: "Lato", serif;
  font-size: 20px;

  a {
    color: #ffffff;
    font-family: "Lato", serif;

    &:hover {
      color: #f1dade;
    }
  }
`;

const Ornament = styled.img.attrs({
  src: "assets/ornament.png",
  alt: "Ornament",
})`
  padding-top: 40px;
  width: 200px;
`;

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    [MARKS.CODE]: (text) => (
      <SyntaxHighlighter
        lineProps={{
          style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
        }}
        wrapLines
        language="javascript"
        style={materialDark}
        customStyle={{ fontSize: "16px" }}
      >
        {text}
      </SyntaxHighlighter>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <Description>{children}</Description>
    ),
    [BLOCKS.HYPERLINK]: (node) => (
      <Anchor href={node.data.uri} target="_blank" rel="noopener noreferrer">
        {node.content[0].value}
      </Anchor>
    ),
  },
};

const ProjectDetails = () => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const { projectId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProjectByKey(projectId);
      console.log(data);
      setLoading(false);
      setProject(data);
    };

    fetchData();
  }, [projectId]);

  return (
    <Shell>
      <ProjectLayout>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Title>{project.title}</Title>
            <Description>{project.shortDescription}</Description>
            <Image src={project.mainImage} />
            <Description>
              {documentToReactComponents(project.body, options)}
            </Description>
          </>
        )}
        <Ornament />
      </ProjectLayout>
    </Shell>
  );
};

export default ProjectDetails;
