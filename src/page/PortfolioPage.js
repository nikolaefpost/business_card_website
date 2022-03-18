import React, {useRef, useState, useLayoutEffect, useEffect} from 'react';
import styles from "./page.module.scss"
import {NavBar, PhotoViewMobil, PhotoViewScreen, UpButton} from "../components";
import {img1, img2, img3, img4, img5, img6} from "../assets/folio/XXl";

const PortfolioPage = ({screenWidth, scrollPosition}) => {
    console.log(scrollPosition)

    const navbarRef = useRef();
    const footerRef = useRef();

    const [navbarHeight, setNavbarHeight] = useState();
    const [footerHeight, setFooterHeight] = useState();
    const [contentHeight, setContentHeight] = useState()
    // console.log(screenWidth)


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
        setContentHeight(()=>(Number(document.documentElement.clientHeight) - navbarHeight-50))
    },[navbarHeight, footerHeight, document.documentElement.clientHeight])


    const folio = [img1, img2, img3, img4, img5, img6];
    return (
        <div className='bg-dark'>
            <div ref={navbarRef}>
                <NavBar/>
            </div>
            {(screenWidth > 1000) ? <PhotoViewScreen screenWidth={screenWidth} contentHeight={contentHeight} folio={folio}/>:
                <PhotoViewMobil folio={folio}/>
            }

            {/*{(screenWidth > 1000) && <div ref={footerRef}*/}
            {/*      style={{height: '200px'}}*/}
            {/*>*/}
            {/*    /!*<Footer/>*!/*/}
            {/*</div>}*/}
            {scrollPosition>80&&<UpButton/>}

        </div>
    );
};

export default PortfolioPage;