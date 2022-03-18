import React from 'react';
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import {useQuery} from "@apollo/client";
import {GET_NEWS} from "../../gql/query";
import classNames from "classnames";
import styles from "./News.module.scss"
import title from "../../assets/images/newsTitle.png"
import {MainButton} from "../Button";
import {ME_ROUTE, NEWS_ROUTE} from "../../utils/consts";

import styled, { keyframes } from 'styled-components';
import {bounce} from 'react-animations';
import NewsTitle from "../../assets/images/NewsTitle";
import {CardNews} from "../index";
const HeadShake = styled.div`animation: 6s ${keyframes`${bounce}`} 5`;

const News = ({screenWidth}) => {
    const { loading, error, data } = useQuery(GET_NEWS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (
        <>
            <a name='news'></a>
            <div className={classNames('bg-dark text-center pb-2', styles.title)}>
                <HeadShake>
                    {/*<Image src={title} style={{marginTop: '10vh'}} className='mx-md-2' fluid/>*/}
                    <NewsTitle width={(screenWidth > 600)? '518' : '359'}/>
                </HeadShake>
                <Container className='bg-dark text-light pb-2 p-md-5 mt-5 mb-1'>
                    <Row>
                        {data.queryNews.map(item=>
                            // <Col key={item.id} xl={4} lg={12} className='mb-md-3 mb-xl-0'>
                            //     <Card bg='dark' onClick={() => window.open(item.resource_link)}>
                            //         <Card.Img variant="top" src={item.image_src}/>
                            //         <Card.Body>
                            //             <Card.Title className={styles.news_article} >{item.title}</Card.Title>
                            //             <Card.Text>{item.description}</Card.Text>
                            //         </Card.Body>
                            //     </Card>
                            // </Col>
                            <CardNews news={item} col={4} bg='dark'/>
                        )}
                    </Row>
                </Container>
                <MainButton path={NEWS_ROUTE}/>
            </div>
        </>
    );
};

export default News;