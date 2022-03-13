import React from 'react';
import { Col, Container, Row} from "react-bootstrap";
import ContactInfo from "./ContactInfo/ContactInfo";
import CallBack from "./CallBack/CallBack";
import styles from "./InformQuestions.module.scss"

const InformQuestions = ({screenWidth}) => {
    return (
        <div className='bg-dark text-center' >

            <Container className='bg-dark text-light pb-5 '>
                <a name='contact'></a>
                <Row>
                    <Col xl={6} lg={12}>
                        <ContactInfo screenWidth={screenWidth} />
                    </Col>
                    <Col xl={6} lg={12}>
                        <CallBack screenWidth={screenWidth} />
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default InformQuestions;