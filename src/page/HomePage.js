import React from 'react';
import NavBar from "../components/NavBar";
import ImgMain from "../components/ImgMain";
import TitleMain from "../components/TitleMain";
import AboutMe from "../components/AboutMe";
import MyFolio from "../components/MyFolio";
import News from "../components/News";

const HomePage = () => {
    return (
        <div>
            <ImgMain/>

            <TitleMain/>
            <AboutMe/>
            <MyFolio/>
            <News/>
        </div>
    );
};

export default HomePage;