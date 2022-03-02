import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import ContactInfo from "./ContactInfo/ContactInfo";
import GetInTouch from "./GetInTouch";

const InformQuestions = () => {
    return (
        <div className='bg-dark text-center' >

            <Container className='bg-dark text-light pb-5 '>
                <a name='contact'></a>
                <Row>
                    <Col xl={6} lg={12}>
                        <ContactInfo/>
                    </Col>
                    <Col xl={6} lg={12}>
                        <GetInTouch/>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default InformQuestions;