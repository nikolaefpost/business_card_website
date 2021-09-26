import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {ADD_CALLBACK} from "../gql/query";
import {useMutation} from "@apollo/client";


const GetInTouch = () => {
    let input_date, input_time, input_phone, input_desc;

    const [addCallback, {data, loading, error}] = useMutation(ADD_CALLBACK);

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    return (
        <div className='bg-dark text-center'>
            <img className='' style={{marginTop: '10vh'}} src='GetInTouch.png'/>
            <Form className='mt-5' onSubmit={e => {
                      e.preventDefault();

                      addCallback({
                          variables: {
                              date: input_date.value,
                              time: input_time.value,
                              phone_number: Number(input_phone.value),
                              description: input_desc.value,
                          }
                      });

                  }}>
                <Row className="mb-3 justify-content-center">

                    <Form.Group as={Col} sm={3} controlId="formGridEmail">
                        <Form.Control type="date" ref={node => {input_date = node;}}  />
                    </Form.Group>

                    <Form.Group as={Col} sm={3} controlId="formGridState"
                                >
                        <select className='form-select ' ref={node => {input_time = node;}}>
                            <option value="8">8:00</option>
                            <option value="9">9:00</option>
                            <option value="10">10:00</option>
                            <option value="11">11:00</option>
                            <option value="12">12:00</option>
                            <option value="13">13:00</option>
                            <option value="14">14:00</option>
                            <option value="15">15:00</option>
                            <option value="16">16:00</option>
                            <option value="17">17:00</option>
                            <option value="18">18:00</option>
                            <option value="19">19:00</option>
                            <option value="20">20:00</option>
                            <option value="21">21:00</option>
                        </select>
                    </Form.Group>

                </Row>
                <div className="row justify-content-center align-items-center  mb-3">
                    <div className=" col-sm-2 ">
                        +3 80
                    </div>

                    <div className=" col-sm-3">
                        <Form.Control placeholder="_ _   _ _ _  _ _  _ _" id='phone'
                                      ref={node => {input_phone = node;}}/>
                    </div>
                </div>

                <Row className="mb-3 justify-content-center">
                    <Form.Group as={Col} sm={8} className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder="Вопросы и пожелания..."
                                      ref={node => {input_desc = node;}}/>
                    </Form.Group>
                </Row>

                <Button variant="outline-secondary" type="submit" style={{borderColor: '#CD1BEA'}}>
                    Жду звонка!
                </Button>
            </Form>
        </div>
    );
};

export default GetInTouch;