import React from 'react';
import {Container, Image} from "react-bootstrap";
import classNames from "classnames";
import styles from "./TitleAboutMe.module.scss"
import title from "../../assets/images/titleAboutMe.png"
import styled, { keyframes } from 'styled-components';
import { headShake } from 'react-animations';
const HeadShake = styled.div`animation: 3s ${keyframes`${headShake}`} infinite`;

const TitleAboutMe = () => {
    return (
        <div className={classNames('text-light', styles.wraper)} >
            <Container>
                <HeadShake><Image src={title}  fluid/></HeadShake>
            </Container>
        </div>
    );
};

export default TitleAboutMe;