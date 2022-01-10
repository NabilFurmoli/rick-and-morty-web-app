/* Module Imports */
import React from 'react';
import { Navbar, Nav, NavbarBrand, Collapse, NavbarToggler } from 'reactstrap';

/* CSS Imports */
import './Navigator.css'

const Navigetor = () => {
    return (
        <div>
            <Navbar
                color="info"
                expand="md"
                full={true}
                light
            >
                <NavbarBrand href="/">
                    Rich and Morty
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Navigetor;