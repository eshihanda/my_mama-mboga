// The navbar component fixed at the top
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function TopNav() {
  return (
    <Navbar bg="light" expand="lg" fixed='top' className="shadow-sm py-3 mb-3">
      <Container>
        <Navbar.Brand href="/" className="fw-bold text-success">
          Shop Mtaani
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-dark">Home</Nav.Link>
            <Nav.Link href="#products" className="text-dark">Products</Nav.Link>
            <Nav.Link href="#about" className="text-dark">About</Nav.Link>
            <Nav.Link href="#contact" className="text-dark">Contact</Nav.Link>
            <Button variant="success" className="ms-3">
              Order Now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
