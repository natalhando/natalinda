import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Nav/Nav";

function Control() {
  const currentPath = useLocation().pathname;
  console.log(currentPath);

  const ROOT_ROUTES = ["/", "/me", "/projects", "/notfound", "/resume"];

  return (
    <>
      <Nav>
        <Nav.Item label="home" isActive={currentPath === "/"} />
        <Nav.Item label="me" path="/me" isActive={currentPath === "/me"} />
        <Nav.Item
          label="projects"
          path="/projects"
          isActive={
            currentPath === "/projects" || !ROOT_ROUTES.includes(currentPath)
          }
          nested={!ROOT_ROUTES.includes(currentPath)}
        />
      </Nav>

      <Outlet />
    </>
  );
}

export default Control;
