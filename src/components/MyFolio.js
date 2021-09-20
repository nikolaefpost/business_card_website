import React from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import styles from './components.module.css'

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
                        <Col xl={5} lg={12} className='mb-4'>
                            {/*<Image src="IMG_6855.jpg" fluid/>*/}
                            <div className={styles.folio_img} style={{backgroundImage: 'url(IMG_6855.jpg)'}}></div>
                        </Col>
                        <Col xl={7} lg={12} className='mb-4'>
                            {/*<Image src="IMG_6896.jpg" fluid/>*/}
                            <div className={styles.folio_img} style={{backgroundImage: 'url(IMG_6896.jpg)'}}></div>
                        </Col>
                        <Col xl={7} lg={12} className='mb-4'>
                            {/*<Image src="IMG_6855.jpg" fluid/>*/}
                            <div className={styles.folio_img} style={{backgroundImage: 'url(IMG_6855.jpg)'}}></div>
                        </Col>
                        <Col xl={5} lg={12} className='mb-4'>
                            {/*<Image src="IMG_6896.jpg" fluid/>*/}
                            <div className={styles.folio_img} style={{backgroundImage: 'url(IMG_6896.jpg)'}}></div>
                        </Col>
                        <Col xl={5} lg={12} className='mb-4'>
                            {/*<Image src="IMG_6855.jpg" fluid/>*/}
                            <div className={styles.folio_img} style={{backgroundImage: 'url(IMG_6855.jpg)'}}></div>
                        </Col>
                        <Col xl={7} lg={12} className='mb-4'>
                            {/*<Image src="IMG_6896.jpg" fluid/>*/}
                            <div className={styles.folio_img} style={{backgroundImage: 'url(IMG_6896.jpg)'}}></div>
                        </Col>
                    </Row>
                </Container>

                <Button variant='outline-secondary' className='col-sm-3 col-lg-2 fw-bold my-sm-3'>ещё</Button>
            </div>
        </>
    );
};

export default MyFolio;