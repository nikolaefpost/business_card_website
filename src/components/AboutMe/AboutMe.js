import React from 'react';
import {Image} from "react-bootstrap";
import {ME_ROUTE} from "../../utils/consts";
import title from "../../assets/images/titleAboutMe.png"
import styles from "./AboutMe.module.scss"
import {MainButton} from "../Button";

const AboutMe = ({text}) => {
    // const history = useHistory();
    return (
        <>
            <div className='bg-dark text-light flex-column justify-content-center text-center pt-5 px-md-2 pb-2'>
                <a name='about'></a>
                <Image src={title} style={{marginTop: '10vh'}} fluid/>
                <div className="container my-5 ">{text}</div>
                <MainButton path={ME_ROUTE}/>
            </div>
        </>
    );
};

export default AboutMe;