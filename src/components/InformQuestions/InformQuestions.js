import React from 'react';
import { Col, Container, Row} from "react-bootstrap";
import ContactInfo from "./ContactInfo/ContactInfo";
import CallBack from "./CallBack/CallBack";


const InformQuestions = ({screenWidth}) => {
    return (
        <div className=' text-center' >

            <Container className=' pb-5 '>
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