import React from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";

const News = () => {
    return (
        <div className='bg-dark text-center' >
            <img className='' style={{marginTop: '10vh'}} src='informImg.png'/>
            <Container className='bg-dark text-light pb-5 mt-5'>
                <Row>
                    <Col xl={4} lg={12}>
                        <Card bg='dark' border="light">
                            <Card.Img variant="top" src="wedding-dress-2021.jpg" />
                            <Card.Body>
                                <Card.Title>МОДНЫЕ СВАДЕБНЫЕ ПЛАТЬЯ И ВСЕ ТЕНДЕНЦИИ СВАДЕБНОЙ МОДЫ 2021</Card.Title>
                                <Card.Text>
                                    Какие свадебные платья будут в моде в 2021 году? Все модные тенденции и новинки свадебных
                                    платьев 2021 года. Более 200 фото лучших свадебных образов года
                                </Card.Text>
                                <Button variant='outline-secondary'>ещё</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} lg={12}>
                        <Card bg='dark' border="light">
                            <Card.Img variant="top" src="wedding-dress-2021.jpg" />
                            <Card.Body>
                                <Card.Title>МОДНЫЕ СВАДЕБНЫЕ ПЛАТЬЯ И ВСЕ ТЕНДЕНЦИИ СВАДЕБНОЙ МОДЫ 2021</Card.Title>
                                <Card.Text>
                                    Какие свадебные платья будут в моде в 2021 году? Все модные тенденции и новинки свадебных
                                    платьев 2021 года. Более 200 фото лучших свадебных образов года
                                </Card.Text>
                                <Button variant='outline-secondary'>ещё</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} lg={12}>
                        <Card bg='dark' border="light">
                            <Card.Img variant="top" src="wedding-dress-2021.jpg" />
                            <Card.Body>
                                <Card.Title>МОДНЫЕ СВАДЕБНЫЕ ПЛАТЬЯ И ВСЕ ТЕНДЕНЦИИ СВАДЕБНОЙ МОДЫ 2021</Card.Title>
                                <Card.Text>
                                    Какие свадебные платья будут в моде в 2021 году? Все модные тенденции и новинки свадебных
                                    платьев 2021 года. Более 200 фото лучших свадебных образов года
                                </Card.Text>
                                <Button variant='outline-secondary'>ещё</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Button variant='outline-secondary' className='col-sm-3 col-lg-2 fw-bold my-sm-3' >ещё</Button>
        </div>
    );
};

export default News;