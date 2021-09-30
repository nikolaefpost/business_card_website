import React from 'react';
import {Container, Image} from "react-bootstrap";

const TitleAboutMe = () => {
    return (
        <div className='text-light ' style={{background: 'linear-gradient(to bottom, #F9F4F1, #212529)'}}>
            <Container>
                <Image src="aboutMeImg1.png"  fluid/>
            </Container>
        </div>
    );
};

export default TitleAboutMe;