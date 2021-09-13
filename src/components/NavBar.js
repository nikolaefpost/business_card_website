import React from 'react';

import {Container, Image, Nav, Navbar, NavDropdown} from "react-bootstrap";

const NavBar = () => {

    return (
        <>
            <a name='top'></a>
            <Navbar style={{backgroundColor: '#F9F4F1'}} expand="xl">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image src="headerImg1.png" fluid/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#about">Обо мне</Nav.Link>
                            <Nav.Link href="#folio">Портфолио</Nav.Link>
                            {/*<NavDropdown title="Портфолио" id="basic-nav-dropdown">*/}
                            {/*    <NavDropdown.Item href="folio">Фото</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="folio">Видео</NavDropdown.Item>*/}
                            {/*</NavDropdown>*/}
                            <Nav.Link href="#news">Новости</Nav.Link>
                            <Nav.Link href="#contact">Контакты</Nav.Link>
                            <Nav.Link href="#link">
                                <div className='px-3' style={{borderLeft: 'solid 1px black'}}>
                                    <i className="bi bi-facebook me-2"></i>
                                    <i className="bi bi-twitter me-2"></i>
                                    <i className="bi bi-instagram "></i>
                                </div>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;