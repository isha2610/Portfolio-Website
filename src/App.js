import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Experience from "./components/Experience";
import CollapsibleNavbar from "./components/ResponsiveNavbarReact";
import Skill from "./components/skills";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <CollapsibleNavbar />

      <main>
        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="skills">
          <Skill />
        </section>

        <section id="contact">
          <ContactMe />
        </section>
      </main>

      <Footer />
    </Router>
  );
}

export default App;