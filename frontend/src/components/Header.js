import React from 'react';
// import {LinkContainer} from 'react-router-dom';
import { Navbar,Nav,Container} from 'react-bootstrap';

const Header = () => {
    return (
        <header>
<Navbar bg="light" variend="light" expand="lg" collapseOnSelect>
  <Container>
    
    <Navbar.Brand href='/' >Sportizen</Navbar.Brand>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav"  style={{ justifyContent: 'flex-end'}}>
      <Nav className="mr-0">
        <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
        <Nav.Link href="/login"><i className="fas fa-user"></i>Sign In</Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}

export default Header
