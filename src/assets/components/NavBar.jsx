import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';


export default function NavBar() {
  return (
    <Navbar expand="sm" bg="info" data-bs-theme="dark">
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="text-decoration-none text-white p-2">
            🏚️ Home
            </Link>
            <Link to="/Contact" className="text-decoration-none text-white p-2">
            📞 Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none text-white p-3">
          🎸 Rockie Doggie!
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
