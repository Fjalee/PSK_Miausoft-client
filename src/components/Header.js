import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { SignInButton } from './SignInButton';
import { SignOutButton } from './SignOutButton';
import { useIsAuthenticated } from '@azure/msal-react';
import ProtectedComponent from '../security/ProtectedComponent';
import { ROLES } from '../security/Roles';

function Header() {
  const isAuthenticated = useIsAuthenticated();
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
            <ProtectedComponent roles={[ROLES.ADMIN]}>
              <Nav.Link as={Link} to="/admin/parcels">
                All Parcels
              </Nav.Link>
            </ProtectedComponent>
          </Nav>
          {isAuthenticated ? <SignOutButton /> : <SignInButton />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
