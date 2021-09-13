import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";

const News = () => {
    return (
        <>
            <a name='news'></a>
            <div className='bg-dark text-center'>
                {/*<img className='' style={{marginTop: '10vh'}} src='informImg.png'/>*/}
                <Image src="informImg.png" style={{marginTop: '10vh'}} className='mx-md-2' fluid/>
                <Container className='bg-dark text-light pb-5 mt-5'>
                    <Row>
                        <Col xl={4} lg={12} className='mb-md-3 mb-xl-0'>
                            <Card bg='dark'>
                                <Card.Img variant="top" src="memo_for_newlyweds.jpg"/>
                                <Card.Body>
                                    <Card.Title style={{color: '#CD1BEA'}}>ПАМЯТКА МОЛОДОЖЕНАМ</Card.Title>
                                    <Card.Text>
                                        Организация свадьбы, особенно если это торжество с большим количеством гостей,
                                        требует составления списка дел и вещей, без которых не обойтись и на самой
                                        церемонии,
                                        и во время банкета. Подробный список заметно облегчит подготовку к празднику

                                    </Card.Text>
                                    <Button variant='outline-secondary'
                                            onClick={() => window.open('https://sunmag.me/svadby/chto-neobhodimo-dlya-svadby.html')}>ещё</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4} lg={12} className='mb-md-3 mb-xl-0'>
                            <Card bg='dark'>
                                <Card.Img variant="top" src="wedding-dress-2021.jpg"/>
                                <Card.Body>
                                    <Card.Title style={{color: '#CD1BEA'}}>МОДНЫЕ СВАДЕБНЫЕ ПЛАТЬЯ И ВСЕ ТЕНДЕНЦИИ
                                        СВАДЕБНОЙ МОДЫ 2021</Card.Title>
                                    <Card.Text>
                                        Какие свадебные платья будут в моде в 2021 году? Все модные тенденции и новинки
                                        свадебных
                                        платьев 2021 года. Более 200 фото лучших свадебных образов года
                                    </Card.Text>
                                    <Button variant='outline-secondary'
                                            onClick={() => window.open('https://milanstyleguide.com/blog/wedding/modnye-svadebnye-platya-i-vse-tendencii-svadebnoj-mody-2021/')}>ещё</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4} lg={12} className='mb-md-3 mb-xl-0'>
                            <Card bg='dark'>
                                <Card.Img variant="top" src="restaurant_selection.jpg"/>
                                <Card.Body>
                                    <Card.Title style={{color: '#CD1BEA'}}>КАК ВЫБРАТЬ РЕСТОРАН ДЛЯ СВАДЕБНОГО
                                        БАНКЕТА?</Card.Title>
                                    <Card.Text>
                                        Когда начинать искать банкетный зал для свадьбы? Как выбрать ресторан для
                                        проведения
                                        свадьбы? О чём говорить с администрацией? Как сузить круг поисков и о чём нельзя
                                        забывать?
                                        В каком формате провести маленькую свадьбу, а в каком большую? Ответы на эти и
                                        другие вопросы
                                        в этой статье.
                                    </Card.Text>
                                    <Button variant='outline-secondary'
                                            onClick={() => window.open('https://yesyes.ua/article/kak-vyybraty-restoran-dlya-svadebnogo-banketa')}>ещё</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Button variant='outline-secondary' className='col-sm-3 col-lg-2 fw-bold my-sm-3'>ещё</Button>
            </div>
        </>
    );
};

export default News;