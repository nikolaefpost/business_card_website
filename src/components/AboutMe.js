import React from 'react';
import {Button, Image} from "react-bootstrap";

const AboutMe = () => {
    return (
        <>

            <div className='bg-dark text-light flex-column justify-content-center text-center pt-5 px-md-2'>
                <a name='about'></a>
                {/*<img className='' style={{marginTop: '10vh'}} src='aboutMeImg.png'/>*/}
                <Image src="aboutMeImg1.png" style={{marginTop: '10vh'}} fluid/>
                <div className="container my-5 ">
                    JSX это препроцессорный шаг, который добавляет XML синтаксис JavaScript. Вы можете использовать
                    React и без JSX, но JSX делает работу с React куда более элегантной. Как и XML, JSX теги имеют
                    имена, атрибуты и потомков.
                    Следующее, на что нужно обратить внимание, это то, что свойства разделяются запятой. Это так, потому
                    что то, что мы передаем это по-факту объект. А так как это атрибут JavaScript, атрибуты пишутся
                    горбатым регистром и не разделяются тире.
                    Теперь, в коде выше, мы добавили несколько свойств элементам, которые мы стилизовали. Однако,
                    представьте, если бы нам надо было добавить больше и больше стилей для элемента. И это тот момент,
                    когда инлайновые стили косячат, так как не будут выглядеть чистыми.
                </div>
                <Button variant='outline-secondary' className='col-sm-3 col-lg-2 fw-bold my-sm-3'>ещё</Button>
            </div>
        </>
    );
};

export default AboutMe;