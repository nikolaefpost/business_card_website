import React from 'react';
import {Image} from "react-bootstrap";
import {ME_ROUTE} from "../../utils/consts";
import title from "../../assets/images/titleAboutMe.png"
import styles from "./AboutMe.module.scss"
import {MainButton} from "../Button";
import classNames from "classnames";

const AboutMe = ({text}) => {
    return (
        <>
            <div className='bg-dark text-light flex-column justify-content-center text-center pt-5 px-md-2 pb-2 z-index-5'>
                <a name='about'></a>
                <Image src={title} className={styles.about_img} fluid/>
                <div className={classNames("container my-3 my-md-5 text-start ")}>{text}</div>
                <MainButton path={ME_ROUTE}/>
            </div>
        </>
    );
};

export default AboutMe;