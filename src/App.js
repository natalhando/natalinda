import Control from "./pages/Control";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Resume from "./pages/Resume";
import ProjectDetails from "./pages/ProjectDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/index.css";
import Blogpost from "./pages/Blogpost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Control />}>
          <Route index element={<Home />} />
          <Route path="me" element={<AboutMe />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:projectId" element={<ProjectDetails />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:blogPostId" element={<Blogpost />} />
          <Route path="notfound" element={<NotFound />} />
          <Route path="resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
