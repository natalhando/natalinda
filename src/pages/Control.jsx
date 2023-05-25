import React, { useState } from "react";
import Nav from "../components/Nav/Nav";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

let ActivePage = Home;

function Page() {
  const [activePage, setActivePage] = useState("home");

  const handleUpdatePage = (page) => {
    setActivePage(page);

    switch (page) {
      case "home":
        ActivePage = Home;
        break;
      case "about-me":
        ActivePage = AboutMe;
        break;
      case "projects":
        ActivePage = Projects;
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Nav>
        <Nav.Item
          href="#home"
          label="home"
          isActive={activePage === "home"}
          onClick={() => handleUpdatePage("home")}
        />
        <Nav.Item
          label="me"
          isActive={activePage === "about-me"}
          onClick={() => handleUpdatePage("about-me")}
        />
        <Nav.Item
          label="projects"
          isActive={activePage === "projects"}
          onClick={() => handleUpdatePage("projects")}
        />
      </Nav>
      <ActivePage />
    </>
  );
}

export default Page;
