import React, {useRef, useState, useLayoutEffect, useEffect} from 'react';
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import {Carousel, Container} from "react-bootstrap";
import styles from "./home.module.css"
import img1 from "../assets/folio/myFolio1.jpg"
import img2 from "../assets/folio/myFolio2.jpg"
import img3 from "../assets/folio/myFolio3.jpg"
import img4 from "../assets/folio/myFolio4.jpg"
import img5 from "../assets/folio/myFolio5.jpg"
import img6 from "../assets/folio/myFolio6.jpg"
import PhotoViewScreen from "../components/PhotoView/PhotoViewScreen";
import PhotoViewMobil from "../components/PhotoView/PhotoViewMobil";

const PortfolioPage = ({screenWidth}) => {

    const navbarRef = useRef();
    const footerRef = useRef();

    const [navbarHeight, setNavbarHeight] = useState();
    const [footerHeight, setFooterHeight] = useState();
    const [contentHeight, setContentHeight] = useState()
    console.log(screenWidth)


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
            {/*{(screenWidth > 1000) && <div ref={navbarRef}>*/}
            {/*    <NavBar/>*/}
            {/*</div>}*/}
            <NavBar/>
            {(screenWidth > 1000) ? <PhotoViewScreen screenWidth={screenWidth} contentHeight={contentHeight} folio={folio}/>:
                <PhotoViewMobil folio={folio}/>
            }

            {(screenWidth > 1000) && <div ref={footerRef}
                  style={{height: '200px'}}
            >
                {/*<Footer/>*/}
            </div>}

        </div>
    );
};

export default PortfolioPage;