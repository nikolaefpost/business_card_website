import React from 'react';
import {useQuery} from "@apollo/client";
import {GET_NEWS} from "../gql/query";
import {NavBar} from "../components";
import styles from "./page.module.scss"
import {Card, Col, Container, Row} from "react-bootstrap";
import NewsTitleW from "../assets/images/NewsTitleW";

const NewsPage = ({screenWidth}) => {
    const { loading, error, data } = useQuery(GET_NEWS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    console.log(screenWidth)
    return (
        <div className={styles.wraper}>
            <NavBar/>
            <div className={styles.title}>
                <NewsTitleW width={(screenWidth > 600)? '518' : '359'}/>
                <p className={styles.title_text}>
                    В этом разделе вы найдете ответы на часто задаваемые вопросы. Наверняка они окажутся полезными.
                    Если нужная тема в этом перечне не будет освещена – вы всегда можете задать вопрос лично Виктории.
                </p>
            </div>
            <Container className=''>
                <Row>
                    {data.queryNews.map(item=>
                        <Col key={item.id} xl={6} lg={12} className='mb-1 mb-xl-3 '>
                            <Card className='shadow'  onClick={() => window.open(item.resource_link)}>
                                <Card.Img className={styles.card_img}  variant="top" src={item.image_src}/>
                                <Card.Body>
                                    <Card.Title className={styles.news_article} >{item.title}</Card.Title>
                                    <Card.Text>{item.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>

        </div>
    );
};

export default NewsPage;