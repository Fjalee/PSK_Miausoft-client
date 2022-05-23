import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SignInButton } from './SignInButton';
import { SignOutButton } from './SignOutButton';
import { useIsAuthenticated } from '@azure/msal-react';
import ProtectedComponent from '../security/ProtectedComponent';
import { ROLES } from '../security/Roles';

function Header() {
  const isAuthenticated = useIsAuthenticated();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          MiaUps
        </Navbar.Brand>
        <ProtectedComponent roles={[ROLES.ADMIN]}>
          <Nav.Link as={Link} to="/admin/parcels">
            All Parcels
          </Nav.Link>
        </ProtectedComponent>
        { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
      </Container>
    </Navbar>
  );
}

export default Header;
