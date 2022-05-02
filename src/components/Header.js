import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src="/mia-logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          MiaUps
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Track</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#">Login</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

