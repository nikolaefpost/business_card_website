import React from 'react';
import {Button, Card, CardGroup, Col, Container, Image, Row} from "react-bootstrap";
import {useQuery} from "@apollo/client";
import {GET_NEWS} from "../gql/query";

const News = () => {
    const { loading, error, data } = useQuery(GET_NEWS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (
        <>
            <a name='news'></a>
            <div className='bg-dark text-center'>
                {/*<img className='' style={{marginTop: '10vh'}} src='informImg.png'/>*/}
                <Image src="informImg.png" style={{marginTop: '10vh'}} className='mx-md-2' fluid/>
                <Container className='bg-dark text-light pb-5 mt-5'>
                    <Row>
                        {data.queryNews.map(item=>
                            <Col key={item.id} xl={4} lg={12} className='mb-md-3 mb-xl-0'>
                                <Card bg='dark' onClick={() => window.open(item.resource_link)}>
                                    <Card.Img variant="top" src={item.image_src}/>
                                    <Card.Body>
                                        <Card.Title style={{color: '#CD1BEA'}}>{item.title}</Card.Title>
                                        <Card.Text>{item.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                    </Row>
                </Container>
                <Button variant='outline-secondary' style={{borderColor: '#CD1BEA'}} className='col-sm-3 col-lg-2 fw-bold my-sm-3'>ещё</Button>
            </div>
        </>
    );
};

export default News;