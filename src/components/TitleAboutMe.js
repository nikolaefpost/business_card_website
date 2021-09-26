import React from 'react';
import {Container} from "react-bootstrap";

const TitleAboutMe = () => {
    return (
        <div className='text-light py-5' style={{background: 'linear-gradient(to bottom, #F9F4F1, #212529)'}}>
            <Container>
                <h3 >Давайте знакомится! Я - Виктория.</h3>
            </Container>
        </div>
    );
};

export default TitleAboutMe;