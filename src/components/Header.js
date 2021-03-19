import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar id="sticky" collapseOnSelect bg="light" expand="lg">
      <Navbar.Brand href="#about">Carolina</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="nav-link" href="#mywork">
              My Work
            </a>
          </li>
          <a className="nav-link" href="#contact">
            Contact me
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
