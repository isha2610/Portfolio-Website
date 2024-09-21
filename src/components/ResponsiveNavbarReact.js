import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {

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

  return (
    <Navbar collapseOnSelect expand="lg" className="sticky-top bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" style={{ fontSize: '2rem', fontFamily: 'cursive' }}>ISHA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          </Nav>
          <Nav>
            
            <Nav.Link href="#">Learnings/Certifications</Nav.Link>
            <Nav.Link href="#contact">Connect with Me</Nav.Link>
            
            <NavDropdown title="Theme" id="collapsible-nav-dropdown">
              <NavDropdown.Item onClick={lightTheme} className="text-align-center"><i class="fa solid fa-sun"></i></NavDropdown.Item>
              <NavDropdown.Item onClick={darkTheme}><i class="fa solid fa-moon"></i></NavDropdown.Item>
              <NavDropdown.Item onClick={systemTheme}><i class="fa solid fa-sun"></i></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;