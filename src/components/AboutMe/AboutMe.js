import React from 'react';
import {Image} from "react-bootstrap";
import {ME_ROUTE} from "../../utils/consts";
import title from "../../assets/images/titleAboutMe.png"
import styles from "./AboutMe.module.scss"
import {MainButton} from "../Button";
import classNames from "classnames";
import {motion} from "framer-motion";


const AboutMe = ({text}) => {
    return (
        <motion.div
            whileInView={{opacity: [null, .5, 1]}}
            transition={{ duration: 3, times: [0, 0.2, 1] }}>
            <div className='flex-column justify-content-center text-center pt-5 px-md-2 pb-2 '>
                <a name='about'></a>
                <Image src={title} className={styles.about_img} fluid/>
                <div className={classNames("container my-3 my-md-5 text-start ")}>{text}</div>
                <MainButton path={ME_ROUTE}/>
            </div>
        </motion.div>
    );
};

export default AboutMe;