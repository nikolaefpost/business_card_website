

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
import Layout from "../components/Layout/Layout";


const HomePage = ({screenWidth, scrollPosition}) => {

    const { loading, error, data } = useQuery(GET_ABOUT_SHORT);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (<>
        <div  style={{position: 'relative'}}>
            <NavBar />
            <ImgMain/>
            <TitleMain/>
            <Layout>
                <AboutMe text={(data.queryAboutMe)[0].title_short}/>
                <MyFolio screenWidth={screenWidth} />
                <News screenWidth={screenWidth} />
                <InformQuestions screenWidth={screenWidth} />
                <Footer/>
            </Layout>

            {scrollPosition>100&&<UpButton/>}
            {scrollPosition<2500&&<RingButton/>}
        </div>
        </>
    );
};

export default HomePage;