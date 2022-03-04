import React from 'react';
import {Container, Image, Nav, Navbar} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {HOME_ROUTE, PORTFOLIO_ROUTE} from "../../utils/consts";
import styles from "./NavBar.module.scss"
import login from "../../assets/images/navbarLogo.png"

const NavBar = () => {
    const history = useHistory();
    return (
        <>
            <a name='top'></a>
            <Navbar className={styles.wraper} expand="xl">
                <Container bg="dark">
                    <Navbar.Brand href=""  onClick={() => {history.push(HOME_ROUTE)}}>
                        <Image src={login} fluid/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#about" onClick={() => {history.push(HOME_ROUTE)}}>Обо мне</Nav.Link>
                            <Nav.Link href="#folio" onClick={() => {history.push(HOME_ROUTE)}}>Портфолио</Nav.Link>
                            {/*<NavDropdown title="Портфолио" id="basic-nav-dropdown">*/}
                            {/*    <NavDropdown.Item href="folio">Фото</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="folio">Видео</NavDropdown.Item>*/}
                            {/*</NavDropdown>*/}
                            <Nav.Link href="#news" onClick={() => {history.push(HOME_ROUTE)}}>Новости</Nav.Link>
                            <Nav.Link href="#contact" onClick={() => {history.push(HOME_ROUTE)}}>Контакты</Nav.Link>
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