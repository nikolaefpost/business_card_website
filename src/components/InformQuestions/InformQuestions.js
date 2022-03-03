import React from 'react';
import { Col, Container, Row} from "react-bootstrap";
import ContactInfo from "./ContactInfo/ContactInfo";
import CallBack from "./CallBack/CallBack";
import styles from "./InformQuestions.module.scss"

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
                        <CallBack/>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default InformQuestions;