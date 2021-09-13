import React from 'react';
import styles from './components.module.css'

const RingButton = () => {
    return (
        <div>
            <a href="#contact" id={styles.popup__toggle}>
                <div className={styles.circlephone} style={{transformOrigin: 'center'}}></div>
                <div className={styles.circle_fill} style={{transformOrigin: 'center'}}></div>
                <div className={styles.img_circle} style={{transformOrigin: 'center'}}>
                    <div className={styles.img_circleblock} style={{transformOrigin: 'center'}}></div>
                </div>
            </a>
        </div>
    );
};

export default RingButton;