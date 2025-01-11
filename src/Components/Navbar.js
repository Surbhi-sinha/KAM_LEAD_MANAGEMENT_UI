

import React, { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';


const NavigationBar = () => {

  const [user, setUser] = useState(null);

  useEffect(()=>{
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if(loggedInUser){
      setUser(loggedInUser);
    }
  },[]);
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Lead Management System</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {user ? 
          <>
          <Nav.Link href="/dashboard"> Welcome! {user.username}</Nav.Link>
          <Nav.Link href="/" onClick={ ()=>{
            localStorage.removeItem('user');
            setUser(null);
          } }>LogOut</Nav.Link>
          <Nav.Link href="/addLeads">Add Leads</Nav.Link>
          </> : <>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Log In</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
          </>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
