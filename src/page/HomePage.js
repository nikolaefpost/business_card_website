import React, {useEffect, useState} from 'react';

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

const text = "JSX это препроцессорный шаг, который добавляет XML синтаксис JavaScript. Вы можете использовать\n" +
    "                    React и без JSX, но JSX делает работу с React куда более элегантной. Как и XML, JSX теги имеют\n" +
    "                    имена, атрибуты и потомков.\n" +
    "                    Следующее, на что нужно обратить внимание, это то, что свойства разделяются запятой. Это так, потому\n" +
    "                    что то, что мы передаем это по-факту объект. А так как это атрибут JavaScript, атрибуты пишутся\n" +
    "                    горбатым регистром и не разделяются тире.\n" +
    "                    Теперь, в коде выше, мы добавили несколько свойств элементам, которые мы стилизовали. Однако,\n" +
    "                    представьте, если бы нам надо было добавить больше и больше стилей для элемента. И это тот момент,\n" +
    "                    когда инлайновые стили косячат, так как не будут выглядеть чистыми."

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
    const { loading, error, data } = useQuery(GET_ABOUT_SHORT);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (<>
        <div  >
            <NavBar />
            <ImgMain/>
            <TitleMain/>
            <AboutMe text={(data.queryAboutMe)[0].title_short}/>
            <MyFolio/>
            <News/>
            <InformQuestions/>
            <Footer/>
            {scrollPosition>100&&<UpButton/>}
            {scrollPosition<2500&&<RingButton/>}
        </div>
        </>
    );
};

export default HomePage;