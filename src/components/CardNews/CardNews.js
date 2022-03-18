import React from 'react';
import {Card, Col} from "react-bootstrap";
import style from "./CardNews.module.scss"
import styles from "../../page/page.module.scss";

const CardNews = ({news, col, bg}) => {
    return (
        <Col key={news.id} xl={col} lg={12} className='mb-1 mb-xl-3 '>
            <Card bg={bg} className='shadow'  onClick={() => window.open(news.resource_link)}>
                <Card.Img className={styles.card_img}  variant="top" src={news.image_src}/>
                <Card.Body>
                    <Card.Title className={styles.news_article} >{news.title}</Card.Title>
                    <Card.Text>{news.description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardNews;