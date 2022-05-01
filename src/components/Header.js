import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          MiaUps
        </Navbar.Brand>
        <Nav.Link as={Link} to="/admin/parcels">
          All Parcels
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default Header;
