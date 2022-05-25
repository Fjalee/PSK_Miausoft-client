import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="navbar-container">
        <Navbar.Brand as={Link} to="/">
          {' '}
          <img alt="" src="/mia-logo.png" width="40" height="40" className="logo" /> MiaUps
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link as={Link} to="/admin/parcels">
              {' '}
              All Parcels{' '}
            </Nav.Link>
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
