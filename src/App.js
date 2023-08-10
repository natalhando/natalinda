import Control from "./pages/Control";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
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
          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/notfound" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
