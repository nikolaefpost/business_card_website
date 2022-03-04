import React from 'react';
import {Image} from "react-bootstrap";
import styles from './TitleMain.module.scss'

const TitleMain = () => {

    return (<>

        <div  className={styles.divTitleMain}>
            {/*<img  src='mainTitleImg1.png'/>*/}
            <img src="mainTitleImg1.png"  className={styles.imgTitleMain} />
        </div>
        </>
    );
};

export default TitleMain;