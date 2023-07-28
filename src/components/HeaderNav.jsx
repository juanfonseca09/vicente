import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './HeaderStyles.css';
import { Link } from 'react-scroll';

export const HeaderNav = () => {
  return (
    <Navbar expand="lg" className="navbar-custom py-3">
      <Container>
        <Navbar.Brand to="#home" className="d-flex">
          <img alt="" src="/logo.png" width="230" height="80" />{'   '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Link to='inicio' href='' spy={true} smooth={true} offset={50} duration={500}>Inicio</Link>
            <Link to='elsa' href='' spy={true} smooth={true} offset={50} duration={500}>Elsa Capillera</Link>
            <Link to='propuesta' href='' spy={true} smooth={true} offset={50} duration={500}>Nuestra Propuesta</Link>
            <Link to='galeria' href='' spy={true} smooth={true} offset={50} duration={500}>Galeria</Link>
            <Link to='contacto' href='' spy={true} smooth={true} offset={50} duration={500}>Sumate</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
