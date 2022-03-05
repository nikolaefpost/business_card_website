import React from 'react';
import classNames from "classnames";
import styles from "./ContactInfo.module.scss"
import title from "../../../assets/images/ContactImg.png"

const ContactInfo = () => {
    return (
        <div className='bg-dark text-center'>
            <img className='' style={{marginTop: '10vh'}} src={title}/>
            <div className='text-center mt-5'>
                <div className='row mb-3'>
                    <div className='col-4 text-end'>Телефон:</div>
                    <div className='col-8 row '>
                        <span className='col-12 text-start'>+8 050 3180980</span>
                        <span className='col-12 text-start'>+8 093 9824981 (Viber Telegram)</span>
                    </div>
                    <div className='col-4 text-end'>Email:</div>
                    <div className='col-8 row'>
                        <span className={classNames('col-12 text-start', styles.email)} >yemelyanov.eduard@gmail.com</span>
                    </div>
                </div>
                <div>
                    <i className="bi bi-facebook me-5"></i>
                    <i className="bi bi-twitter me-5"></i>
                    <i className="bi bi-instagram "></i>
                </div>

            </div>
        </div>
    );
};

export default ContactInfo;