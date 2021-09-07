import React from 'react';

import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img src='headerImg.png'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Главная</Nav.Link>
                        <Nav.Link href="#link">Обо мне</Nav.Link>
                        <NavDropdown title="Портфолио" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Фото</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Видео</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Новости</Nav.Link>
                        <Nav.Link href="#link"><div className='px-3' style={{borderLeft: 'solid 1px black'}}>
                            <i className="bi bi-facebook me-2"></i>
                            <i className="bi bi-twitter me-2"></i>
                            <i className="bi bi-instagram "></i>
                        </div></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;