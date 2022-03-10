import React, {useEffect} from 'react';
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import {TitleAboutMe} from "../components";
import {useQuery} from "@apollo/client";
import {GET_ABOUT_PATH} from "../gql/query";
import {about1, about2, about3, about4, about5, about6} from "../assets/aboutMe"


import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';
const ZoomIn = styled.div`animation: 2s ${keyframes`${zoomIn}`} 1`;


const AboutMeMore = () => {

    const aboutImg =[about1, about2, about3, about4, about5, about6]
    const {loading, error, data} = useQuery(GET_ABOUT_PATH);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (
        <div>
            <NavBar/>
            <TitleAboutMe/>
            <div className='bg-dark text-light'>
                <Container className='py-4'>
                    <Row className='align-items-center mb-3'>
                        <Col className='text-center pb-3' sm={12} lg={4} xl={2}>
                            <Image src={aboutImg[0]} fluid/>
                        </Col>
                        <Col sm={12} lg={8} xl={10}>
                            <p>
                                {(data.queryAboutMe)[0].path1}
                            </p>
                        </Col>
                    </Row>
                    <Row className='align-items-center mb-3'>
                        <Col sm={12} lg={8} xl={10}>
                            <p>
                                {(data.queryAboutMe)[0].path2}
                            </p>
                        </Col>
                        <Col className='text-center' sm={12} lg={4} xl={2}>
                            <Image src={aboutImg[1]} fluid/>
                        </Col>
                    </Row>
                    <Row className='align-items-center mb-3'>
                        <Col className='text-center' sm={12} lg={4} xl={2}>

                            <Image src={aboutImg[2]} fluid/>
                        </Col>
                        <Col sm={12} lg={8} xl={10}>
                            <p>
                                {(data.queryAboutMe)[0].path3}
                            </p>
                        </Col>
                    </Row>
                    <Row className='align-items-center mb-3'>
                        <Col className='text-center' sm={12} lg={3}>
                            <Image src={aboutImg[3]} fluid/>
                        </Col>
                        <Col sm={12} lg={6}>
                            <ZoomIn><Image src={aboutImg[4]} fluid/></ZoomIn>

                        </Col>
                        <Col className='text-center' sm={12} lg={3}>
                            <Image style={{width: '100%'}} src={aboutImg[5]}/>
                        </Col>
                    </Row>
                    <p>
                        {(data.queryAboutMe)[0].path4}
                    </p>
                </Container>
            </div>
            <Footer/>
        </div>
    );
};

export default AboutMeMore;