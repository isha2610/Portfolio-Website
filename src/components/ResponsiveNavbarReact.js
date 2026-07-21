import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Moon, Sun } from "lucide-react";

const getSystemTheme = () =>
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

function CollapsibleNavbar() {
  const [activeSection, setActiveSection] = useState(
    () => window.location.hash.slice(1) || "about"
  );

  // Initial theme follows the visitor's operating-system preference.
  const [theme, setTheme] = useState(getSystemTheme);

  useEffect(() => {
    document.body.dataset.bsTheme = theme;
  }, [theme]);

  useEffect(() => {
    const updateActiveSection = () => {
      setActiveSection(window.location.hash.slice(1) || "about");
    };

    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  const nextThemeLabel =
    theme === "light" ? "Switch to dark theme" : "Switch to light theme";

  return (
    <Navbar collapseOnSelect expand="lg" className="sticky-top bg-body-tertiary">
      <Container>
        <Navbar.Brand
          href="#about"
          onClick={() => setActiveSection("about")}
          style={{ fontSize: "1.35rem", fontFamily: "-moz-initial" }}
        >
          Isha Khurana
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#projects"
              active={activeSection === "projects"}
              onClick={() => setActiveSection("projects")}
            >
              Projects
            </Nav.Link>

            <Nav.Link
              href="#experience"
              active={activeSection === "experience"}
              onClick={() => setActiveSection("experience")}
            >
              Experience
            </Nav.Link>
          </Nav>

          <Nav className="align-items-lg-center">
            <Nav.Link
              href="#skills"
              active={activeSection === "skills"}
              onClick={() => setActiveSection("skills")}
            >
              Skills
            </Nav.Link>

            <Nav.Link
              href="#contact"
              active={activeSection === "contact"}
              onClick={() => setActiveSection("contact")}
            >
              Let's Connect!
            </Nav.Link>

            <button
              type="button"
              className="btn btn-link nav-link d-flex align-items-center"
              onClick={toggleTheme}
              aria-label={nextThemeLabel}
              title={nextThemeLabel}
            >
              {theme === "light" ? (
                <Moon size={18} strokeWidth={1.8} aria-hidden="true" />
                ) : (
                <Sun size={18} strokeWidth={1.8} aria-hidden="true" />
                )}
              <span className="visually-hidden">{nextThemeLabel}</span>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleNavbar;