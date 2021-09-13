import React, {useEffect, useState} from 'react';
import NavBar from "../components/NavBar";
import ImgMain from "../components/ImgMain";
import TitleMain from "../components/TitleMain";
import AboutMe from "../components/AboutMe";
import MyFolio from "../components/MyFolio";
import News from "../components/News";
import InformQuestions from "../components/inform&questions";
import UpButton from "../components/UpButton";
import RingButton from "../components/RingButton";

const HomePage = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (<>
        <div  >
            <NavBar />
            <ImgMain/>

            <TitleMain/>
            <AboutMe/>
            <MyFolio/>
            <News/>
            <InformQuestions/>
            {scrollPosition>100&&<UpButton/>}
            {scrollPosition<2500&&<RingButton/>}


        </div>
        </>
    );
};

export default HomePage;