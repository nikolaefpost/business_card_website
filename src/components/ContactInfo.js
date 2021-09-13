import React from 'react';

const ContactInfo = () => {
    return (
        <div className='bg-dark text-center'>
            <img className='' style={{marginTop: '10vh'}} src='ContactImg.png'/>
            <div className='text-center mt-5'>
                <div className='row mb-3'>
                    <div className='col-4 text-end'>Телефон:</div>
                    <div className='col-8 row '>
                        <span className='col-12 text-start'>+8 050 3180980</span>
                        <span className='col-12 text-start'>+8 093 9824981 (Viber Telegram)</span>
                    </div>
                    <div className='col-4 text-end'>Email:</div>
                    <div className='col-8 row'>
                        <span className='col-12 text-start'>yemelyanov.eduard@gmail.com</span>
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