import React,{useState} from 'react';
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import {NavWrapper} from './style'; 
import {Link} from "react-router-dom";
function Navbars() { 
    return (
        <NavWrapper>
            <Container >
        <Navbar  expand="lg"  >
         <Link to="/">
          <h1>Movies Info</h1>
  </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/movie" className="nav-link">TV show</Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
</Container>
</NavWrapper>
    )
}

export default Navbars;
