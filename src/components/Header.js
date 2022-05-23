import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SignInButton } from './SignInButton';
import { SignOutButton } from './SignOutButton';
import { useIsAuthenticated } from '@azure/msal-react';

function Header() {
  const isAuthenticated = useIsAuthenticated();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          MiaUps
        </Navbar.Brand>
        { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
      </Container>
    </Navbar>
  );
}

export default Header;
