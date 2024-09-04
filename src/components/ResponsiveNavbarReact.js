import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="sticky-top bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Isha</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Portfolio</Nav.Link>
            <Nav.Link href="#pricing">Experience</Nav.Link>
            <NavDropdown title="Theme" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className="text-align-center"><i class="fa solid fa-sun"></i></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><i class="fa solid fa-moon"></i></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><i icon="fa-solid fa-circle-half-stroke" /></NavDropdown.Item>              
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Learnings and Certifications</Nav.Link>
            <Nav.Link href="#deets">Connect with Me</Nav.Link>

            <Nav.Link eventKey={2} href="#memes">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;