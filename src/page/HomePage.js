

import {
    AboutMe,
    Footer,
    ImgMain,
    InformQuestions,
    MyFolio,
    NavBar,
    News,
    RingButton,
    TitleMain,
    UpButton
} from "../components";
import {useQuery} from "@apollo/client";
import {GET_ABOUT_SHORT} from "../gql/query";


const HomePage = ({screenWidth, scrollPosition}) => {

    const { loading, error, data } = useQuery(GET_ABOUT_SHORT);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (<>

            <NavBar />
            <ImgMain/>
            <TitleMain/>
            <AboutMe text={(data.queryAboutMe)[0].title_short}/>
            <MyFolio screenWidth={screenWidth} />
            <News screenWidth={screenWidth} />
            <InformQuestions screenWidth={screenWidth} />
            <Footer/>
            {scrollPosition>100&&<UpButton/>}
            {scrollPosition<2500&&<RingButton/>}

        </>
    );
};

export default HomePage;