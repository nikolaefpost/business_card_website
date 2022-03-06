import React, {useRef, useState, useLayoutEffect, useEffect} from 'react';
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import {Carousel, Container} from "react-bootstrap";
import img1 from "../assets/folio/myFolio1.jpg"
import img2 from "../assets/folio/myFolio2.jpg"
import img3 from "../assets/folio/myFolio3.jpg"
import img4 from "../assets/folio/myFolio4.jpg"
import img5 from "../assets/folio/myFolio5.jpg"
import img6 from "../assets/folio/myFolio6.jpg"

const PortfolioPage = () => {

    const navbarRef = useRef();
    const footerRef = useRef();

    const [navbarHeight, setNavbarHeight] = useState();
    const [footerHeight, setFooterHeight] = useState();
    const [contentHeight, setContentHeight] = useState()

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

    useEffect(()=>{
        setContentHeight(()=>(Number(document.documentElement.clientHeight) - navbarHeight-footerHeight))
    },[navbarHeight, footerHeight, document.documentElement.clientHeight])


    const folio = [img1, img2, img3, img4, img5, img6];
    return (
        <div className='bg-dark'>
            <div ref={navbarRef}>
                <NavBar   />
            </div>

            <Container style={{height: contentHeight? contentHeight: 'auto', overflow: "hidden"}} className='d-flex flex-column justify-content-center'>
                <Carousel fade nextLabel='' prevLabel='' className='my-auto' >
                    {folio.map((number) =>
                        <Carousel.Item key={number.toString()}>
                            <img
                                className="d-block w-auto"
                                src={number}
                                alt="First slide"
                                height={Number(contentHeight)? Number(contentHeight): 'auto'}
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