import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Nav/Nav";

function Page() {
  const currentPath = useLocation().pathname;

  return (
    <>
      <Nav>
        <Nav.Item label="home" isActive={currentPath === "/"} />
        <Nav.Item label="me" path="/me" isActive={currentPath === "/me"} />
        <Nav.Item
          label="projects"
          path="/projects"
          isActive={currentPath === "/projects"}
        />
      </Nav>

      <Outlet />
    </>
  );
}

export default Page;
