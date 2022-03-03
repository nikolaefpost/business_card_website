import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import classNames from "classnames";
import styles from './Footer.module.scss'
import footer from '../../assets/images/FooterImg.png'

const Footer = () => {

    return (
        <div  className={classNames('pt-4', styles.wraper)}>
        <Container className='text-light' >
            <Row className='justify-content-between align-items-center border-bottom border-dark'>
                <Col xl={6} sm={12} className='text-center'>
                    <Image src={footer} fluid/>
                </Col>
                <Col  xl={2} sm={12} className='text-center mb-sm-3 mb-xl-0'>
                    <a  href="#top" className={styles.a_white}>
                       Домой
                    </a>
                    <a  href="#top" className={styles.a_white}>
                        Новости
                    </a>
                </Col>

            </Row>
            <Row className='justify-content-between align-items-center pt-3 pb-4 '>
                <Col xl={6} sm={12} className='text-center mb-sm-2 mb-xl-0'>
                    Ведущая Виктория Copyright © 2022 Pilot
                </Col>
                <Col  xl={2} sm={12} className='text-center'>
                    <i className="bi bi-facebook me-2"></i>
                    <i className="bi bi-twitter me-2"></i>
                    <i className="bi bi-instagram "></i>
                </Col>

            </Row>
        </Container>
        </div>
    );
};

export default Footer;