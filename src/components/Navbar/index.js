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
          <img className="img__nav" src="/image/logo2.svg" alt="" />
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
