import React, {useRef, useState, useLayoutEffect} from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {Carousel, Container} from "react-bootstrap";

const PortfolioPage = () => {

    const navbarRef = useRef();
    const footerRef = useRef();

    const [navbarHeight, setNavbarHeight] = useState();
    const [footerHeight, setFooterHeight] = useState();
    const [contentHeight, setContentHeight] = useState();

    console.log(navbarHeight, footerHeight)
    console.log(contentHeight)

    useLayoutEffect(() => {
        if (navbarRef.current) {
            setNavbarHeight(navbarRef.current.offsetHeight);
        }
    }, []);

    useLayoutEffect(() => {
        if (footerRef.current) {
            setFooterHeight(footerRef.current.offsetHeight);
        }
    }, []);

    useLayoutEffect(() => {
        if (navbarHeight&&footerHeight) {
            setContentHeight(document.body.clientHeight - navbarHeight-footerHeight);
        }
    }, []);

    const numbers = ["folio/myFolio1.jpg", "folio/myFolio2.jpg", "folio/myFolio3.jpg", "folio/myFolio4.jpg",
        "folio/myFolio5.jpg"];
    return (
        <div className='bg-dark'>
            <div ref={navbarRef}>
                <NavBar   />
            </div>

            <Container style={{height: contentHeight}}>
                <Carousel fade>
                    {numbers.map((number) =>
                        <Carousel.Item key={number.toString()}>
                            <img
                                className="d-block w-100"
                                src={number}
                                alt="First slide"
                            />

                        </Carousel.Item>)}
                </Carousel>
            </Container>

            <div ref={footerRef}>
                <Footer/>
            </div>

        </div>
    );
};

export default PortfolioPage;