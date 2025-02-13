import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Experience from "./components/Experience";
import CollapsibleNavbar from "./components/ResponsiveNavbarReact";
import Skill from './components/skills';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* <Home /> */}
      <CollapsibleNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <About />
              {/* <Projects />
              <ContactMe /> */}
            </>
          }
        />
        <Route path="/project" element={<Projects/>} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/contactme" element={<ContactMe/>} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/skill" element={<Skill/>} />

      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}
export default App;
