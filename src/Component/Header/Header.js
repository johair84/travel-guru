import React from 'react';
import './Header.css';

import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/Logo.png';

const Header = () => {
    return (
      <div>
      <Container  >
      <Navbar expand="lg" >
      <Navbar.Brand href="#home" >
      <img
        src={logo}
        width="100"
        height="50"
        alt="traval guru"
      />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      <Navbar.Collapse id="basic-navbar-nav" className="active">
        <Form inline >
            <FormControl type="text" placeholder="Search your destination" className="mr-sm-2" />
        </Form>
          <Nav.Link className="active" href="#home">News</Nav.Link>
          <Nav.Link className="active" href="#link">Destination</Nav.Link>
          <Nav.Link className="active" href="#link">Blog</Nav.Link>
          <Nav.Link className="active" href="#link">Contact</Nav.Link>

          <Button style={{padding:"5px 15px"}}  variant="warning">Login</Button>

      </Navbar.Collapse>
    </Navbar>
      </Container>
      
      </div>
    );
};

export default Header;