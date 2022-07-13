import React from 'react';
import { useState, useEffect } from 'react';
import { Nav, NavLink } from 'react-bootstrap';

const NavBar = props => {

  return (
    <> 
      <Nav>
        <Nav.Link className="home" to="/">Home</Nav.Link>
        <Nav.Link classNamee="tracker" to="/tracker">Project Tracker</Nav.Link>
        <Nav.Link classNamee="page2" to="/">Page 2</Nav.Link>
        <Nav.Link classNamee="page3" to="/">Page 3</Nav.Link>
        <Nav.Link classNamee="login" to="/login">Login</Nav.Link>
      </Nav>
    </>
  )
}

export default NavBar;