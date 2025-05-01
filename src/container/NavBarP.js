import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/new-logo2.png";

const NavBarP = () => {
  const handleLogout = () => {
    // dispatch(signOut());
    // navigate("/");
  };

  return (
    <Navbar bg='white' data-bs-theme='light' sticky='top'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <img
            src={logo}
            alt='Madad'
            style={{ height: "8vh", objectFit: "contain" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='main-navbar' />
        <Navbar.Collapse id='main-navbar'>
          <Nav className='ms-auto text-uppercase'>
            {/* <Nav.Link as={Link} to='/'>
              Home
            </Nav.Link> */}
            <Nav.Link as={Link} to='/find-donor'>
              Find Donor
            </Nav.Link>
            <Nav.Link as={Link} to='/register'>
              Register
            </Nav.Link>
            {/* <Nav.Link onClick={handleLogout}>Logout</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBarP;
