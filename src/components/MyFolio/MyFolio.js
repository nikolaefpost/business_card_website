import React, {useState} from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import styles from './MyFolio.module.scss'
import { PORTFOLIO_ROUTE} from "../../utils/consts";
import {useHistory} from "react-router-dom";
import classNames from "classnames";
import img1 from '../../assets/folio/myFolio1.jpg'
import img2 from '../../assets/folio/myFolio2.jpg'
import img3 from '../../assets/folio/myFolio3.jpg'
import img4 from '../../assets/folio/myFolio4.jpg'
import img5 from '../../assets/folio/myFolio5.jpg'
import img6 from '../../assets/folio/myFolio6.jpg'
import {Modal_} from "../index";

const imeges = [img1, img2, img3, img4, img5, img6]

const MyFolio = () => {

    const history = useHistory();
    const [show_img, setShow_img] = useState(null);
    const [urlImg, setUrlImg] = useState();
    
    function handleClick(e) {
        setShow_img(!show_img);
        console.log(e?.target.style.backgroundImage)
        setUrlImg(e?.target.style.backgroundImage)
    }


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (i) => {
        setShow(true)
        setShow_img(imeges[i])
    };
    return (
        <>
            <a name='folio'></a>
            <div className={classNames('bg-dark text-center', styles.folio_title)}>

                <Container className='bg-dark text-light pb-5'>
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
                <Modal_ show={show} handleClose={handleClose}><Image src={show_img} className={styles.modal_img}/></Modal_>

                <Button variant='outline-secondary'  className={classNames('col-sm-3 col-lg-2 fw-bold my-sm-3', styles.folio_border)}
                        onClick={() => {

                            history.push(PORTFOLIO_ROUTE)
                        }}>ещё</Button>
            </div>
        </>
    );
};

export default MyFolio;