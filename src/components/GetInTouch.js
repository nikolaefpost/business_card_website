import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";

const GetInTouch = () => {
    return (
        <div className='bg-dark text-center'>
            <img className='' style={{marginTop: '10vh'}} src='ContactImg.png'/>
            <h3 className='mt-5'>Перезвонить вам?</h3>
            <Form className='mt-3'>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="date"  />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">

                        <select className='form-select '>
                            <option value="rating">8:00</option>
                            <option value="name">9:00</option>
                            <option value="date">18:00</option>
                        </select>
                    </Form.Group>
                </Row>
                <div className="row justify-content-center align-items-center  mb-3">
                    <div className=" col-2 ">
                        +3 80
                    </div>

                    <div className=" col-6">
                        <Form.Control placeholder="_ _  _ _ _ _ _ _ _" />
                    </div>
                </div>

                <Form.Group  className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="Вопросы и пожелания..." />
                </Form.Group>

                <Button variant="outline-secondary" type="submit">
                    Жду звонка!
                </Button>
            </Form>
        </div>
    );
};

export default GetInTouch;