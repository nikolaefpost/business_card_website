import React from 'react';
import {Carousel, Container} from "react-bootstrap";
import styles from "./PhotoView.module.scss"

const PhotoViewScreen = ({contentHeight, handleShow, folio, screenWidth}) => {
    return (
        <div className={styles.wraper} style={{width: screenWidth*.8}}>
            <div style={{height: contentHeight ? contentHeight : 'auto', overflow: "hidden"}}>
                <Carousel fade nextLabel='' prevLabel='' className='' style={{width: "100%"}}>
                    {folio.map((number) => {
                            return (
                                <Carousel.Item key={number.toString()}>
                                    <img
                                        className="d-block w-auto"
                                        src={number}
                                        alt="First slide"
                                        height={Number(contentHeight) ? Number(contentHeight) : 'auto'}
                                        onClick={() => handleShow(number)}
                                    />
                                </Carousel.Item>
                            )
                        }
                    )}
                </Carousel>
            </div>
        </div>

    );
};

export default PhotoViewScreen;