import React from 'react';
import classNames from "classnames";
import styles from "./ContactInfo.module.scss"
import title from "../../../assets/images/ContactImg.png"
import ContactImg from "../../../assets/images/ContactImg";

const ContactInfo = ({screenWidth}) => {
    return (
        <div className='bg-dark text-center'>
            <div className={styles.title}><ContactImg width={(screenWidth > 600)? '228' : '158'}/></div>
            {/*<img className='' style={{marginTop: '10vh'}} src={title}/>*/}
            <div className='text-center mt-2 mt-sm-5'>
                <div className='row mb-3 px-3 px-sm-0'>
                    <div className='col-3 col-sm-4 text-end'>Телефон:</div>
                    <div className='col-9 col-sm-8  row '>
                        <span className='col-12 text-start'>+38 050 3180980</span>
                        <span className='col-12 text-start'>+38 093 9824981 (Viber Telegram)</span>
                    </div>
                    <div className='col-3 col-sm-4 text-end'>Email:</div>
                    <div className='col-9 col-sm-8 row'>
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