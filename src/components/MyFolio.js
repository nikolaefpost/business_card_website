import React, {useState} from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import styles from './components.module.css'
import { PORTFOLIO_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";
import ShowImg from "./ShowImg";

const MyFolio = () => {

    const history = useHistory();
    const [show_img, setShow_img] = useState(false);
    const [urlImg, setUrlImg] = useState();
    
    function handleClick(e) {
        setShow_img(!show_img);
        console.log(e?.target.style.backgroundImage)
        setUrlImg(e?.target.style.backgroundImage)
    }
    return (
        <>
            {show_img && <ShowImg url={urlImg} click={handleClick}/>}
            <a name='folio'></a>
            <div className='bg-dark text-center' style={{
                backgroundImage: 'url(myFolio.png)', backgroundRepeat: 'no-repeat',
                backgroundPosition: '5% top', paddingTop: '10vh'
            }}>

                <Container className='bg-dark text-light pb-5'>
                    <Row>
                        <Col xl={5} lg={12} className='mb-4' onClick={handleClick}>
                            {/*<Image src="IMG_6855.jpg" fluid/>*/}
                            <div className={styles.folio_img} style={{backgroundImage: 'url(folio/myFolio1.jpg)'}}></div>
                        </Col>
                        <Col xl={7} lg={12} className='mb-4'>
                            {/*<Image src="IMG_6896.jpg" fluid/>*/}
                            <div className={styles.folio_img} style={{backgroundImage: 'url(folio/myFolio2.jpg)'}}></div>
                        </Col>
                        <Col xl={7} lg={12} className='mb-4'>
                            {/*<Image src="IMG_6855.jpg" fluid/>*/}
                            <div className={styles.folio_img} style={{backgroundImage: 'url(folio/myFolio3.jpg)'}}></div>
                        </Col>
                        <Col xl={5} lg={12} className='mb-4'>
                            {/*<Image src="IMG_6896.jpg" fluid/>*/}
                            <div className={styles.folio_img} style={{backgroundImage: 'url(folio/myFolio4.jpg)'}}></div>
                        </Col>
                        <Col xl={5} lg={12} className='mb-4'>
                            {/*<Image src="IMG_6855.jpg" fluid/>*/}
                            <div className={styles.folio_img} style={{backgroundImage: 'url(folio/myFolio5.jpg)'}}></div>
                        </Col>
                        <Col xl={7} lg={12} className='mb-4'>
                            {/*<Image src="IMG_6896.jpg" fluid/>*/}
                            <div className={styles.folio_img} style={{backgroundImage: 'url(folio/myFolio6.jpg)'}}></div>
                        </Col>
                    </Row>
                </Container>

                <Button variant='outline-secondary'  className='col-sm-3 col-lg-2 fw-bold my-sm-3'
                        style={{borderColor: '#CD1BEA'}}
                        onClick={() => {

                            history.push(PORTFOLIO_ROUTE)
                        }}>ещё</Button>
            </div>
        </>
    );
};

export default MyFolio;