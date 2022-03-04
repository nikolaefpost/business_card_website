import React from 'react';
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import {Col, Container, Image, Row} from "react-bootstrap";
import {TitleAboutMe} from "../components";
import {useQuery} from "@apollo/client";
import {GET_ABOUT_PATH} from "../gql/query";


const AboutMeMore = () => {
    const {loading, error, data} = useQuery(GET_ABOUT_PATH);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    return (
        <div>
            <NavBar/>
            <TitleAboutMe/>
            <div className='bg-dark text-light '>
                <Container className='py-4'>
                    <Row className='align-items-center mb-3'>
                        <Col className='text-center pb-3' sm={12} lg={4} xl={2}>
                            <Image src="aboutMe1.JPG" fluid/>
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
                            <Image src="aboutMe2.JPG" fluid/>
                        </Col>
                    </Row>
                    <Row className='align-items-center mb-3'>
                        <Col className='text-center' sm={12} lg={4} xl={2}>

                            <Image src="aboutMe3.JPG" fluid/>
                        </Col>
                        <Col sm={12} lg={8} xl={10}>
                            <p>
                                {(data.queryAboutMe)[0].path3}
                            </p>
                        </Col>
                    </Row>
                    <Row className='align-items-center mb-3'>
                        <Col className='text-center' sm={12} lg={3}>
                            <Image src="aboutMe6.JPG" fluid/>
                        </Col>
                        <Col sm={12} lg={6}>
                            <Image src="aboutMe5.JPG" fluid/>
                        </Col>
                        <Col className='text-center' sm={12} lg={3}>
                            <Image style={{width: '100%'}} src="BBp0M5nytI4.jpg"/>
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