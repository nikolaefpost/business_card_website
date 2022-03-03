import React, {useRef, useState, useLayoutEffect, useEffect} from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer/Footer";
import {Carousel, Container} from "react-bootstrap";

const PortfolioPage = () => {

    const navbarRef = useRef();
    const footerRef = useRef();

    const [navbarHeight, setNavbarHeight] = useState();
    const [footerHeight, setFooterHeight] = useState();
    const [contentHeight, setContentHeight] = useState()

    console.log(navbarHeight, footerHeight, contentHeight)


    useLayoutEffect(() => {
        console.log(navbarRef.current)
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

    // let contentHeight;
    // if(navbarHeight&&footerHeight){
    //     contentHeight = document.documentElement.clientHeight - navbarHeight-footerHeight-80;
    //     console.log(document.documentElement.clientHeight)
    // }


    const numbers = ["folio/myFolio1.jpg", "folio/myFolio2.jpg", "folio/myFolio3.jpg", "folio/myFolio4.jpg",
        "folio/myFolio5.jpg"];
    return (
        <div className='bg-dark'>
            <div ref={navbarRef}>
                <NavBar   />
            </div>

            <Container style={{height: contentHeight? contentHeight: 'auto', overflow: "hidden"}} className='d-flex flex-column justify-content-center'>
                <Carousel fade nextLabel='' prevLabel='' className='my-auto'>
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