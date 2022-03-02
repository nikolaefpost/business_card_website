import React from 'react';
import styles from './Button.module.scss'
import classNames from "classnames";

const UpButton = () => {
    return (
        <>
                <a className={styles.up_style_main} href="#top">
                    <i className ={classNames('bi', 'bi-arrow-up-short', styles.up_style_arrow)}></i>
                </a>
        </>
    );
};

export default UpButton;