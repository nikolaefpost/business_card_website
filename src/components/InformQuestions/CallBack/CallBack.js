import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {ADD_CALLBACK} from "../../../gql/query";
import {useMutation} from "@apollo/client";
import classNames from "classnames";
import styles from "./CallBack.module.scss"
import CallBackSvg from "../../../assets/images/CallBackSvg";
import DateIcon from "../../../assets/icons/DateIcon";



const GetInTouch = ({screenWidth}) => {
    let input_date, input_time, input_phone, input_desc;

    const [addCallback, {data, loading, error}] = useMutation(ADD_CALLBACK);

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    return (
        <div className={classNames('bg-dark text-center px-2 px-md-0', styles.title)}>
            {/*<img className='' style={{marginTop: '10vh'}} src={callback}/>*/}
            <CallBackSvg width={(screenWidth > 600)? '433' : '300'} />
            <Form className='mt-2 mt-sm-5 px-2 px-sm-0' onSubmit={e => {
                      e.preventDefault();
                      addCallback({
                          variables: {
                              date: input_date.value,
                              time: input_time.value,
                              phone_number: input_phone.value,
                              description: input_desc.value,
                          }
                      });

                  }}>
                <Row className="mb-3 justify-content-center flex-column  flex-md-row flex-md-nowrap">
                    <Row  controlId="formGridEmailq" className='justify-content-center justify-content-md-end align-items-center mb-3 mb-md-0'>
                        <Form.Group  controlId="formGridEmail" className='col-1 col-md-1'>
                           <DateIcon/>
                        </Form.Group>

                        <Form.Group className='col-10 col-md-4 ms-2 ms-md-0 ps-md-0' controlId="formGridDate">
                            <Form.Control type="date" ref={node => {input_date = node;}}  />
                        </Form.Group>
                    </Row>
                    <Row  controlId="formGridEmailq" className='justify-content-center justify-content-md-start align-items-center'>
                        <Form.Group  controlId="formGridEmail" className='col-1 col-md-1'>
                            <i className="bi bi-clock"></i>
                        </Form.Group>

                        <Form.Group className='col-10 col-md-4 ms-2 ms-md-0 ps-md-0' controlId="formGridDate">
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
                </Row>
                <Row className="mb-3 justify-content-center align-items-center">
                    <Form.Group  controlId="formGridEmail" className='col-2 col-md-2'>
                        +380
                    </Form.Group>

                    <Form.Group  controlId="formGridPassword" className='col-10 col-md-4'>
                        <Form.Control placeholder="_ _   _ _ _  _ _  _ _" id='phone'
                                      ref={node => {input_phone = node;}}/>
                    </Form.Group>
                </Row>
                {/*<Row className="justify-content-center align-items-center  mb-3">*/}
                {/*    <Form.Group as={Col} sm={2}>*/}
                {/*        +3 80*/}
                {/*    </Form.Group>*/}

                {/*    <Form.Group as={Col} sm={3}>*/}
                {/*        <Form.Control placeholder="_ _   _ _ _  _ _  _ _" id='phone'*/}
                {/*                      ref={node => {input_phone = node;}}/>*/}
                {/*    </Form.Group>*/}
                {/*</Row>*/}

                <Row className="mb-3 justify-content-center">
                    <Form.Group as={Col} sm={8} className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder="Вопросы и пожелания..."
                                      ref={node => {input_desc = node;}}/>
                    </Form.Group>
                </Row>

                <Button variant="outline-secondary" type="submit" className={styles.button_color}>
                    Жду звонка!
                </Button>
            </Form>
        </div>
    );
};

export default GetInTouch;