import React from 'react';
import {Carousel, Container} from "react-bootstrap";
import styles from "./PhotoView.module.scss"

const PhotoViewScreen = ({contentHeight, handleShow, folio}) => {
    // console.log(contentHeight)
    return (
        <div className={styles.wraper}>
            <Container style={{height: contentHeight ? contentHeight : 'auto', overflow: "hidden"}}
                       className='d-flex flex-column justify-content-center '>
                <Carousel fade nextLabel='' prevLabel='' className=''>
                    {folio.map((number) => {
                        console.log(number)
                         return  ( <Carousel.Item key={number.toString()}>
                                <img
                                    className="d-block w-auto"
                                    src={number}
                                    alt="First slide"
                                    height={Number(contentHeight) ? Number(contentHeight) : 'auto'}
                                    onClick={() => handleShow(number)}
                                />
                            </Carousel.Item>)
                        }
                    )}
                </Carousel>
            </Container>
        </div>

    );
};

export default PhotoViewScreen;