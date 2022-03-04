import React from 'react';
import {Container, Image} from "react-bootstrap";
import classNames from "classnames";
import styles from "./TitleAboutMe.module.scss"
import title from "../../assets/images/titleAboutMe.png"

const TitleAboutMe = () => {
    return (
        <div className={classNames('text-light', styles.wraper)} >
            <Container>
                <Image src={title}  fluid/>
            </Container>
        </div>
    );
};

export default TitleAboutMe;