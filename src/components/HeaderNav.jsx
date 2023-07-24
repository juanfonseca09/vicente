import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './HeaderStyles.css';

export const HeaderNav = () => {
  return (
    <Navbar expand="lg" className="navbar-custom py-3">
      <Container>
        <Navbar.Brand href="#home" className="d-flex">
          <img alt="" src="/logo.png" width="230" height="80" />{'   '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link>Inicio</Nav.Link>
            <Nav.Link>Elsa Capillera</Nav.Link>
            <Nav.Link>Nuestra Propuesta</Nav.Link>
            <Nav.Link>Galeria</Nav.Link>
            <Nav.Link>Sumate</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
