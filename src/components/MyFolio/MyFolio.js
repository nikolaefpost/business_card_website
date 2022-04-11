import React, {useState} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import {MainButton} from "../Button";
import styles from './MyFolio.module.scss'
import {PORTFOLIO_ROUTE} from "../../utils/consts";
import classNames from "classnames";
import {motion} from "framer-motion";
import {Modal} from "../";
import {img1_md, img2_md, img3_md, img4_md, img5_md, img6_md} from "../../assets/folio/MD";
import {img1, img2, img3, img4, img5, img6} from "../../assets/folio/XXl";


export const images = [img1, img2, img3, img4, img5, img6]

const MyFolio = ({screenWidth}) => {

    const [show_img, setShow_img] = useState(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (i) => {
        setShow(true)
        setShow_img(images[i])
    };
    return (
        <motion.div
            whileInView={{y: [200, 100, 0], opacity: [0, 0, 1]}}
            transition={{duration: .5}}
        >
            <a name='folio'></a>
            <div className={classNames('bg-dark text-center pb-2', styles.folio_title)}>

                <Container className='bg-dark text-light pb-2 p-md-5'>
                    <Row>
                        <Col xl={5} lg={12} className='mb-4' onClick={() => handleShow(0)}>
                            <Image src={img1_md} className={styles.folio_img}/>
                        </Col>
                        <Col xl={7} lg={12} className='mb-4' onClick={() => handleShow(1)}>
                            <Image src={img2_md} className={styles.folio_img}/>
                        </Col>
                        <Col xl={7} lg={12} className='mb-4' onClick={() => handleShow(2)}>
                            <Image src={img3_md} className={styles.folio_img}/>
                        </Col>
                        {(screenWidth > 600) && <>
                            <Col xl={5} lg={12} className='mb-4' onClick={() => handleShow(3)}>
                                <Image src={img4_md} className={styles.folio_img}/>
                            </Col>
                            <Col xl={5} lg={12} className='mb-4' onClick={() => handleShow(4)}>
                                <Image src={img5_md} className={styles.folio_img}/>
                            </Col>
                            <Col xl={7} lg={12} className='mb-4' onClick={() => handleShow(5)}>
                                <Image src={img6_md} className={styles.folio_img}/>
                            </Col></>}
                    </Row>
                </Container>
                <Modal show={show} handleClose={handleClose}><Image src={show_img}
                                                                    className={styles.modal_img}/></Modal>

                <MainButton path={PORTFOLIO_ROUTE}/>
            </div>
        </motion.div>
    );
};

export default MyFolio;
