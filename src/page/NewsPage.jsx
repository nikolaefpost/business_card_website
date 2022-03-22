import React, {useEffect, useState} from 'react';
import {useQuery} from "@apollo/client";
import {GET_NEWS1} from "../gql/query";
import {CardNews, NavBar, PaginationBasic} from "../components";
import styles from "./page.module.scss"
import {Container, Row} from "react-bootstrap";
import NewsTitleW from "../assets/images/NewsTitleW";
import {logDOM} from "@testing-library/react";

const NewsPage = ({screenWidth, scrollPosition}) => {
    const [news, setNews] = useState([])
    const [page, setPage] = useState(0)
    const [load, setLoad] = useState(true)
    let scrollHeight = document.body.scrollHeight
        - document.body.clientHeight
    console.log('Top', window.pageYOffset)
    console.log('scrollHeight', scrollHeight)
    console.log('scrollPosition', scrollPosition)
    console.log('news, page', news, page)

    const {loading, error, data, fetchMore} = useQuery(GET_NEWS1, {
        variables: {
            first: 4,
        },
    });

    // useEffect(()=>{
    //     if (data) setNews(data.queryNews)
    // },[data])

    useEffect(() => {
        console.log('OPPPPPPP')
        fetchMore({
            variables: (screenWidth > 600) ?
                {
                    offset: page * 4,
                    first: 4,
                } :
                {
                    offset: page,
                    first: 1,
                }
        }).then(fetchMoreResult => {
            if (fetchMoreResult && (screenWidth > 600)) setNews(fetchMoreResult.data.queryNews)
            else if (screenWidth < 600 && load) {
                setNews((pre) => [...pre, ...fetchMoreResult.data.queryNews])
                setLoad(false)
            }

        });
    }, [page, load])

    useEffect(() => {

        if (scrollPosition > 50 && scrollPosition >= scrollHeight-10) {
            // setPage((pre) => pre + 1)
            setLoad(true);
        }
    }, [scrollPosition])

    function paginHandle(n) {
        setPage(n - 1)
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    return (
        <div className={styles.wraper}>
            <div>
                <NavBar/>
                <div className={styles.title}>
                    <NewsTitleW width={(screenWidth > 600) ? '350' : '300'}/>
                    <p className={styles.title_text}>
                        В этом разделе вы найдете ответы на часто задаваемые вопросы. Наверняка они окажутся полезными.
                        Если нужная тема в этом перечне не будет освещена – вы всегда можете задать вопрос лично
                        Виктории.
                    </p>
                </div>
                <Container className=''>
                    <Row>
                        {news.map(item =>
                            <CardNews key={item.id} desc={true} news={item} col={6}/>
                        )}
                    </Row>
                </Container>
            </div>

            {(screenWidth > 600) && <PaginationBasic numb={2} active={page + 1} paginHandle={paginHandle}/>}
        </div>
    );
};

export default NewsPage;