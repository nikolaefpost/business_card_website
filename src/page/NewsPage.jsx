import React, {useEffect, useState} from 'react';
import {useQuery} from "@apollo/client";
import {GET_NEWS1} from "../gql/query";
import {CardNews, NavBar, PaginationBasic} from "../components";
import styles from "./page.module.scss"
import {Container, Row} from "react-bootstrap";
import NewsTitleW from "../assets/images/NewsTitleW";

const NewsPage = ({screenWidth}) => {
    const [news, setNews] = useState( [])
    const [page, setPage] = useState(0)


    const { loading, error, data, fetchMore} = useQuery(GET_NEWS1, {
        variables: {
            first: 4,
        },
    });

    useEffect(()=>{
        if (data) setNews(data.queryNews)
    },[data])

    useEffect(()=>{
        fetchMore({
            variables: {
                offset: page*4,
            },
        }).then(fetchMoreResult => {
            if (fetchMoreResult) setNews(fetchMoreResult.data.queryNews)

        });
    },[page])

    function paginHandle(n){setPage(n-1)}

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    return (
        <div className={styles.wraper}>
            <div>
                <NavBar/>
                <div className={styles.title}>
                    <NewsTitleW width={(screenWidth > 600)? '350' : '300'}/>
                    <p className={styles.title_text}>
                        В этом разделе вы найдете ответы на часто задаваемые вопросы. Наверняка они окажутся полезными.
                        Если нужная тема в этом перечне не будет освещена – вы всегда можете задать вопрос лично Виктории.
                    </p>
                </div>
                <Container className=''>
                    <Row>
                        {news.map(item=>
                            <CardNews key={item.id} desc={true}  news={item} col={6}/>
                        )}
                    </Row>
                </Container>
            </div>

            <PaginationBasic numb={2} active={page+1} paginHandle={paginHandle}/>
        </div>
    );
};

export default NewsPage;