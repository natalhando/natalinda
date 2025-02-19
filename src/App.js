import Control from "./pages/Control";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Resume from "./pages/Resume";
import ProjectDetails from "./pages/ProjectDetails";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./assets/index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Control />}>
          <Route index element={<Home />} />
          <Route path="me" element={<AboutMe />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:projectId" element={<ProjectDetails />} />
          <Route path="notfound" element={<NotFound />} />
          <Route path="resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
