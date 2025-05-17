import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function TopNav() {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm py-3">
      <Container>
        {/* Brand logo linking to home */}
        <Navbar.Brand as={Link} to="/" className="fw-bold text-success">
          Shop Mtaani
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {/* Use NavLink for active route styling */}
            <Nav.Link
              as={NavLink}
              to="/"
              end
              className={({ isActive }) => isActive ? 'text-success fw-bold' : 'text-dark'}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/products"
              className={({ isActive }) => isActive ? 'text-success fw-bold' : 'text-dark'}
            >
              Products
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/vendors"
              className={({ isActive }) => isActive ? 'text-success fw-bold' : 'text-dark'}
            >
              Vendors
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/contact"
              className={({ isActive }) => isActive ? 'text-success fw-bold' : 'text-dark'}
            >
              Contact
            </Nav.Link>

            {/* Primary action button */}
            <Button
              as={Link}
              to="/products"
              variant="success"
              className="ms-3"
            >
              Order Now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
