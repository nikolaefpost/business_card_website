import React from 'react';
import {Carousel, Container} from "react-bootstrap";

const PhotoViewScreen = ({contentHeight, screenWidth, folio}) => {
    return (
        <Container style={{height: contentHeight? contentHeight: 'auto', overflow: "hidden"}} className='d-flex flex-column justify-content-center'>
            <Carousel fade nextLabel='' prevLabel='' className='my-auto' >
                {folio.map((number) =>
                    <Carousel.Item key={number.toString()}>
                        <img
                            className="d-block w-auto"
                            src={number}
                            alt="First slide"
                            height={Number(contentHeight) ? Number(contentHeight) : 'auto'}
                        />
                    </Carousel.Item>)}
            </Carousel>
        </Container>
    );
};

export default PhotoViewScreen;