import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import classNames from "classnames";
import styles from './Footer.module.scss'
import footer from '../../assets/images/FooterImg.png'
import {FACEBOOK, HOME_ROUTE, INSTA, LINKEDIN} from "../../utils/consts";
import {Link} from "react-router-dom";

const Footer = () => {

    return (
        <div  className={classNames('pt-4', styles.wraper)}>
        <Container className='text-light' >
            <Row className='justify-content-between align-items-center border-bottom border-dark'>
                <Col xl={6} sm={12} className='text-center'>
                    <Link href="" to={HOME_ROUTE}><Image src={footer} fluid/></Link>
                </Col>
                <Col  xl={2} sm={12} className='text-center mb-sm-3 mb-xl-0'>
                    <Link href="#top" to={HOME_ROUTE} className={styles.a_white}>Домой</Link>
                    <Link href="" to={HOME_ROUTE} className={styles.a_white}>Новости</Link>
                </Col>

            </Row>

            <Row className='justify-content-between align-items-center pt-3 pb-4 '>
                <Col xl={6} sm={12} className={classNames('text-center mb-sm-2 mb-xl-0', styles.cursor)}
                     onClick={() => window.open(LINKEDIN)}>
                    Ведущая Виктория Copyright © 2022 Pilot
                </Col>
                <Col  xl={2} sm={12} className={classNames('text-center', styles.cursor)}>
                    <i className="bi bi-facebook me-4" onClick={() => window.open(FACEBOOK)}></i>
                    <i className="bi bi-twitter me-4" onClick={() => window.open(INSTA)}></i>
                    <i className="bi bi-instagram " onClick={() => window.open(INSTA)}></i>
                </Col>

            </Row>
        </Container>
        </div>
    );
};

export default Footer;