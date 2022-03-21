import React, {useEffect, useState} from 'react';
import {useQuery} from "@apollo/client";
import {GET_NEWS1} from "../gql/query";
import {CardNews, NavBar, PaginationBasic} from "../components";
import styles from "./page.module.scss"
import {Container, Row} from "react-bootstrap";
import NewsTitleW from "../assets/images/NewsTitleW";

const NewsPage = ({screenWidth, scrollPosition}) => {
    const [news, setNews] = useState( [])
    const [page, setPage] = useState(0)
    let scrollHeight = document.body.scrollHeight - document.body.scrollTop

    console.log(news, page, scrollHeight)

    const { loading, error, data, fetchMore} = useQuery(GET_NEWS1, {
        variables: {
            first: 4,
        },
    });

    // useEffect(()=>{
    //     if (data) setNews(data.queryNews)
    // },[data])

    useEffect(()=>{
        console.log('OPPPPPPP')
        fetchMore({
            variables: {
                offset: page*4,
            },
        }).then(fetchMoreResult => {
            if (fetchMoreResult && (screenWidth > 600)) setNews(fetchMoreResult.data.queryNews)
            else if (screenWidth < 600) setNews((pre)=>[...pre, ...fetchMoreResult.data.queryNews])

        });
    },[page])

    useEffect(()=>{
        console.log( scrollPosition , 1500)
        if(scrollPosition > scrollHeight) setPage((pre)=>pre+1)
    },[scrollPosition])

    function paginHandle(n){setPage(n-1)}

    // function onScrollList(event) {
    //     const scrollBottom = event.target.scrollTop +
    //         event.target.offsetHeight === event.target.scrollHeight;
    //     console.log(scrollBottom)
    //
    //     if (scrollBottom) {
    //         console.log('OPPPPPPP')
    //         // setPage((pre)=>pre+1)
    //     }
    // }


    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    return (
        <div className={styles.wraper} >
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