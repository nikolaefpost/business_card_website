import React from 'react';
import {Card, Col} from "react-bootstrap";
import styles from "./CardNews.module.scss"
import classNames from "classnames";

const CardNews = ({news, col, bg, desc}) => {
   const text = (news.description.length > 260) ? news.description.substr(0, 260)+ ' ...' : news.description

    return (
        <Col key={news.id} xl={col} lg={12} className='mb-1 mb-xl-2 '>
            <Card bg={bg} className='shadow'  onClick={() => window.open(news.resource_link)}>
                <Card.Img className={styles.card_img}  variant="top" src={news.image_src}/>
                <Card.Body className={styles.card}>
                    <Card.Title className={classNames('text-uppercase', styles.news_article, styles.card_title)} >
                        <div className={styles.card_title_text}>{news.title}</div>
                    </Card.Title>
                    <Card.Text className={desc? styles.card_text_full : styles.card_text}>{desc? news.description : text}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardNews;