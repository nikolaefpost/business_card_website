import React from 'react';
import {Button, Image} from "react-bootstrap";
import {useHistory} from 'react-router-dom'
import {ME_ROUTE} from "../../utils/consts";
import classNames from "classnames";
import styles from "./AboutMe.module.scss"

const AboutMe = ({text}) => {
    const history = useHistory();
    console.log('HHHH')
    return (
        <>
            {/*col-sm-3 col-lg-2 fw-bold my-sm-3*/}
            <div className='bg-dark text-light flex-column justify-content-center text-center pt-5 px-md-2'>
                <a name='about'></a>
                <Image src="aboutMeImg1.png" style={{marginTop: '10vh'}} fluid/>
                <div className="container my-5 ">{text}</div>
                <Button variant='outline-secondary' className={classNames('col-sm-3', 'col-lg-2', 'fw-bold', 'my-sm-3', styles.button)}
                        onClick={() => {
                            history.push(ME_ROUTE)
                        }}>ещё</Button>
            </div>
        </>
    );
};

export default AboutMe;