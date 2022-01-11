import React from 'react'
import './Navbar.css'
import { Navbar, Container, Nav } from 'react-bootstrap'

export const NavbarComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand>
                <span>Albery</span>
                <span>.art3aga( )</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Nav.Link>.projects( )</Nav.Link>
                        <Nav.Link>.skills( )</Nav.Link>
                        <Nav.Link>.social( )</Nav.Link>
                        <Nav.Link>.hobbies( )</Nav.Link>
                        <Nav.Link>.CV( )</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
