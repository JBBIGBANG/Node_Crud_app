import React from 'react';
import {Navbar, Nav, Container, NavDropdown, Form, Button, FormControl,NavLink} from 'react-bootstrap';
import { Link } from 'react-router-dom';




const Navigation = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg"  variant="dark">
            <Container fluid>
                
                    <Navbar.Brand as={Link} to="/">
                                <img
                                alt=""
                                src="https://user-images.githubusercontent.com/42708686/121468850-160d7900-c9d9-11eb-9cc2-b3db7bb52df3.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                />{' '}
                            CRUD APP
                        </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                    
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
      </Container>
   </Navbar>
</div>
    );
};

export default Navigation;