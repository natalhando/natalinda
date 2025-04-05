import React from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import Nav from "../components/Nav/Nav";

function Control() {
  const currentPath = useLocation().pathname;
  const {projectId, blogPostId } = useParams();

  return (
    <>
      <Nav>
        <Nav.Item label="home" isActive={currentPath === "/"} />
        <Nav.Item label="me" path="/me" isActive={currentPath === "/me"} />
        <Nav.Item
          label="projects"
          path="/projects"
          isActive={
            currentPath === "/projects" || projectId
          }
          nested={projectId}
        />
        <Nav.Item
          label="blog"
          path="/blog"
          isActive={currentPath === "/blog" || blogPostId}
          nested={blogPostId}
        />
      </Nav>

      <Outlet />
    </>
  );
}

export default Control;
