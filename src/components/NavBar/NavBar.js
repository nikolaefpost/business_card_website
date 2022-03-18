import React from 'react';
import {Container, Image, Nav, Navbar} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {FACEBOOK, HOME_ROUTE, INSTA} from "../../utils/consts";
import classNames from "classnames";
import styles from "./NavBar.module.scss"
import login from "../../assets/images/navbarLogo.png"

const NavBar = () => {
    let navigate = useNavigate();
    return (
        <>
            <a name='top'></a>
            <Navbar className={styles.wraper} collapseOnSelect  expand="xl">
                <Container bg="dark" >
                    <Navbar.Brand href="" className={styles.wraper_container}>
                        <Link href="" to={HOME_ROUTE}><Image src={login} className={styles.logo}/></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#about" onClick={()=>navigate(HOME_ROUTE)}>Обо мне</Nav.Link>
                            <Nav.Link href="#folio" onClick={()=>navigate(HOME_ROUTE)}>Портфолио</Nav.Link>
                            {/*<NavDropdown title="Портфолио" id="basic-nav-dropdown">*/}
                            {/*    <NavDropdown.Item href="folio">Фото</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="folio">Видео</NavDropdown.Item>*/}
                            {/*</NavDropdown>*/}
                            <Nav.Link href="#news" onClick={()=>navigate(HOME_ROUTE)}>Информация</Nav.Link>
                            <Nav.Link href="#contact" onClick={()=>navigate(HOME_ROUTE)}>Контакты</Nav.Link>
                            <Nav.Link href="#link">
                                <div className={classNames( styles.social)}>
                                    <i className="bi bi-facebook me-2" onClick={() => window.open(FACEBOOK)}></i>
                                    <i className="bi bi-twitter me-2" onClick={() => window.open(INSTA)}></i>
                                    <i className="bi bi-instagram " onClick={() => window.open(INSTA)}></i>
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