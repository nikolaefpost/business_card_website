import React from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";

const MyFolio = () => {
    return (
        <>
            <a name='folio'></a>
            <div className='bg-dark text-center' style={{
                backgroundImage: 'url(myFolio.png)', backgroundRepeat: 'no-repeat',
                backgroundPosition: '5% top', paddingTop: '10vh'
            }}>

                <Container className='bg-dark text-light pb-5'>
                    <Row>
                        <Col xl={6} lg={12}>
                            <img width='100%' src="IMG_6855.jpg" className='mb-4'/>
                        </Col>
                        <Col xl={6} lg={12}>
                            <img width='100%' src="IMG_6896.jpg" className='mb-4'/>
                        </Col>
                        <Col xl={6} lg={12}>
                            <img width='100%' src="IMG_6855.jpg" className='mb-4'/>
                        </Col>
                        <Col xl={6} lg={12}>
                            <img width='100%' src="IMG_6896.jpg" className='mb-4'/>
                        </Col>
                        <Col xl={6} lg={12}>
                            <img width='100%' src="IMG_6855.jpg" className='mb-4'/>
                        </Col>
                        <Col xl={6} lg={12}>
                            <img width='100%' src="IMG_6896.jpg" className='mb-4'/>
                        </Col>
                    </Row>
                </Container>

                <Button variant='outline-secondary' className='col-sm-3 col-lg-2 fw-bold my-sm-3'>ещё</Button>
            </div>
        </>
    );
};

export default MyFolio;