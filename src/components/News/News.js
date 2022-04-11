import React from 'react';
import { Container, Row} from "react-bootstrap";
import {useQuery} from "@apollo/client";
import {GET_NEWS} from "../../gql/query";
import classNames from "classnames";
import styles from "./News.module.scss"
import {motion} from "framer-motion";
import {MainButton} from "../Button";
import { NEWS_ROUTE} from "../../utils/consts";

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
        <motion.div
            whileInView={{y: [200, 100, 0], opacity: [0, 0, 1]}}
            transition={{duration: .5}}
        >
            <a name='news'></a>
            <div className={classNames('text-center pb-2', styles.title)}>
                <HeadShake>
                    <NewsTitle width={(screenWidth > 600)? '518' : '359'}/>
                </HeadShake>
                <Container className='pb-2 p-md-5 mt-5 mb-1' >
                    <Row>
                        {data.queryNews.map(item=>
                            <CardNews key={item.id} news={item} col={4} bg='dark'/>
                        )}
                    </Row>
                </Container>
                <MainButton path={NEWS_ROUTE}/>
            </div>
        </motion.div>
    );
};

export default News;