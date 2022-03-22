import React, {useRef, useState, useLayoutEffect, useEffect} from 'react';
import styles from "./page.module.scss"
import {Modal, NavBar, PhotoViewMobil, PhotoViewScreen, UpButton} from "../components";
import {img1, img2, img3, img4, img5, img6} from "../assets/folio/XXl";
import {Image} from "react-bootstrap";
const images = [img1, img2, img3, img4, img5, img6];


const PortfolioPage = ({screenWidth, scrollPosition}) => {
    const navbarRef = useRef();
    const footerRef = useRef();
    let scrollHeight = document.body.scrollHeight - window.innerHeight;
    console.log('scrollHeight',  window.innerHeight)
    console.log('scrollPosition', scrollPosition)

    const [folio, setFolio] = useState([])
    const [count, setCount] = useState(4)
    const [load, setLoad] = useState(true)

    console.log('folio.length', folio.length)

    const [navbarHeight, setNavbarHeight] = useState();
    const [footerHeight, setFooterHeight] = useState();
    const [contentHeight, setContentHeight] = useState()

    const [show_img, setShow_img] = useState(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (i) => {
        setShow(true)
        setShow_img(i)
    };



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
        if(load) {
            setCount((pre) => pre + 1)
            setFolio(images.slice(0, count))
            setLoad(false)
        }
    },[load])


    useEffect(()=>{
        setContentHeight(()=>(Number(document.documentElement.clientHeight) - navbarHeight-50))
    },[navbarHeight, footerHeight, document.documentElement.clientHeight])

    useEffect(() => {
        if (scrollPosition > 50 && scrollPosition >= scrollHeight-10) setLoad(true);
    }, [scrollPosition])



    return (
        <div className='bg-dark'>
            <div ref={navbarRef}>
                <NavBar/>
            </div>
            {(screenWidth > 1000) ?
                <PhotoViewScreen handleShow={handleShow} screenWidth={screenWidth} contentHeight={contentHeight} folio={folio}/>:
                <PhotoViewMobil handleShow={handleShow} folio={folio}/>
            }
            {scrollPosition>80&&<UpButton/>}
            <Modal show={show} handleClose={handleClose}>
                <Image src={show_img} className={styles.modal_img}/>
            </Modal>

        </div>
    );
};

export default PortfolioPage;