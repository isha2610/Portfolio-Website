import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

// Navbar Duh!

function CollapsibleNavbar() {

  const lightTheme = () => {
    document.body.dataset.bsTheme = 'light';
  }

  const darkTheme = () =>{
    document.body.dataset.bsTheme = 'dark';
  }

  const systemTheme = () => {
    const theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark').matches ? 'dark' : 'light';
    document.body.dataset.bsTheme = theme;
  }

  useState(systemTheme);
  
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="sticky-top bg-body-tertiary">
      <Container>
        <Navbar.Brand to="/" as={Link} style={{ fontSize: '2rem', fontFamily: '-moz-initial' }}>ISHA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link to="/project" as={Link}>Projects</Nav.Link>
          {/* <Nav.Link href='/project'>Projects</Nav.Link> */}

          <Nav.Link to="/experience" as={Link}>Experience</Nav.Link>
          </Nav>
          
          <Nav>
            {/* learnings and certifications - skills */}
            <Nav.Link href="/skill">Skills</Nav.Link> 
            <Nav.Link to="/contactme" as={Link}>Connect with Me</Nav.Link>
            
            <NavDropdown title="Theme" id="collapsible-nav-dropdown">
              <NavDropdown.Item onClick={lightTheme} className="text-align-center"><i class="fa solid fa-sun"></i></NavDropdown.Item>
              <NavDropdown.Item onClick={darkTheme}><i class="fa solid fa-moon"></i></NavDropdown.Item>
              <NavDropdown.Item onClick={systemTheme}><i class="fa solid fa-laptop"></i></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
</>

  );
}

export default CollapsibleNavbar;