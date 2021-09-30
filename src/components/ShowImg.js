import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";


const ShowImg = (props) => {

    return (
        <>
            <Container >
                <Button onClick={props.click}><i className="bi bi-x-circle"></i></Button>
            </Container>

            {/*<Modal*/}
            {/*    show={props.show}*/}
            {/*    onHide={props.click}*/}
            {/*    fullscreen={fullscreen}*/}

            {/*>*/}
            {/*    <Modal.Header closeButton>*/}
            {/*        /!*<Modal.Title id="contained-modal-title-center">*!/*/}
            {/*        /!*    Yemelyanov Eduard*!/*/}
            {/*        /!*</Modal.Title>*!/*/}
            {/*    </Modal.Header>*/}
            {/*    <Modal.Body>*/}
            {/*        <div style={{backgroundImage: props.url, width: '100%', height: '50vh'}}/>*/}
            {/*    </Modal.Body>*/}

            {/*</Modal>*/}

        </>
    );
};

export default ShowImg;