import React, {useEffect, useState} from 'react';
import NavBar from "../components/NavBar";
import ImgMain from "../components/ImgMain/ImgMain";
import TitleMain from "../components/TitleMain";
import AboutMe from "../components/AboutMe/AboutMe";
import MyFolio from "../components/MyFolio/MyFolio";
import News from "../components/News";
import InformQuestions from "../components/InformQuestions/InformQuestions";
import UpButton from "../components/Button/UpButton";
import RingButton from "../components/Button/RingButton";
import Footer from "../components/Footer/Footer";

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


    return (<>
        <div  >
            <NavBar />
            <ImgMain/>

            <TitleMain/>
            <AboutMe text={text}/>
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