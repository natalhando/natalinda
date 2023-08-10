import Control from "./pages/Control";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Control />}>
          <Route index element={<Home />} />
          <Route path="me" element={<AboutMe />} />
          <Route path="projects" element={<Projects />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
