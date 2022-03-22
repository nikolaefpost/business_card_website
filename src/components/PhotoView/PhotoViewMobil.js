import React from 'react';
import {Carousel, Container, ListGroup} from "react-bootstrap";

const PhotoViewMobil = ({folio, handleShow}) => {
    return (
        <Container  className='d-flex flex-column justify-content-center'>
            <ListGroup className='bg-dark'>
                {folio.map((number) =>
                    <ListGroup.Item className='bg-dark' key={number.toString()}>
                        <img
                            className="d-block"
                            src={number}
                            alt="First slide"
                            width='100%'
                            onClick={()=>handleShow(number)}
                        />
                    </ListGroup.Item>)}
            </ListGroup>>
        </Container>
    );
};

export default PhotoViewMobil;