import React, {useState} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import {MainButton} from "../Button";
import styles from './MyFolio.module.scss'
import { PORTFOLIO_ROUTE} from "../../utils/consts";
import classNames from "classnames";
import img1 from '../../assets/folio/myFolio1.jpg'
import img2 from '../../assets/folio/myFolio2.jpg'
import img3 from '../../assets/folio/myFolio3.jpg'
import img4 from '../../assets/folio/myFolio4.jpg'
import img5 from '../../assets/folio/myFolio5.jpg'
import img6 from '../../assets/folio/myFolio6.jpg'
import {Modal} from "../";


export const images = [img1, img2, img3, img4, img5, img6]

const MyFolio = () => {

    const [show_img, setShow_img] = useState(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (i) => {
        setShow(true)
        setShow_img(images[i])
    };
    return (
        <>
            <a name='folio'></a>
            <div className={classNames('bg-dark text-center pb-2', styles.folio_title)}>

                <Container className='bg-dark text-light pb-2 p-md-5'>
                    <Row>
                        <Col xl={5} lg={12} className='mb-4' onClick={()=>handleShow(0)}>
                            <Image src={img1 } className={styles.folio_img} />
                        </Col>
                        <Col xl={7} lg={12} className='mb-4' onClick={()=>handleShow(1)}>
                            <Image src={img2}  className={styles.folio_img} />
                        </Col>
                        <Col xl={7} lg={12} className='mb-4' onClick={()=>handleShow(2)}>
                            <Image src={img3}  className={styles.folio_img}/>
                        </Col>
                        <Col xl={5} lg={12} className='mb-4' onClick={()=>handleShow(3)}>
                            <Image src={img4}  className={styles.folio_img}/>
                        </Col>
                        <Col xl={5} lg={12} className='mb-4' onClick={()=>handleShow(4)}>
                            <Image src={img5}  className={styles.folio_img}/>
                        </Col>
                        <Col xl={7} lg={12} className='mb-4' onClick={()=>handleShow(5)}>
                            <Image src={img6}  className={styles.folio_img}/>
                        </Col>
                    </Row>
                </Container>
                <Modal show={show} handleClose={handleClose}><Image src={show_img} className={styles.modal_img}/></Modal>

               <MainButton path={PORTFOLIO_ROUTE}/>
            </div>
        </>
    );
};

export default MyFolio;