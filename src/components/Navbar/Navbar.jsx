// Imports
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './Navbar.css'


// Function
const NavBar = () => {
    return (
        <header>
            <Navbar id="custom-nav" expand="lg" className="bg-body-tertiary" fixed="top">
                <Container className="justify-content-center text-center">
                    <article className="justify-content-center text-center">
                        <img className="me-3" src="./images/paw-solid.svg" alt="" width="30" height="24" />
                    </article>
                    <article className="justify-content-center text-center">
                        <Navbar.Collapse id="basic-navbar-nav">
                            <h1 id="nav-heading">Bark vs. Meow: The Battle for the Couch</h1>
                            <img className="ms-3" src="./images/paw-solid.svg" alt="" width="30" height="24" />
                        </Navbar.Collapse>
                    </article>
                </Container>
            </Navbar>
        </header>
    );
};


// Export
export default NavBar;