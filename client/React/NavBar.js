import React from 'react';
import { useState, useEffect } from 'react';
import { Nav, NavLink } from 'react-bootstrap';

const NavBar = props => {

  return (
    <> 
      <Nav>
        <Nav.Link to="/">Home</Nav.Link>
        <Nav.Link to="/login">Login</Nav.Link>
      </Nav>
    </>
  )
}

export default NavBar;