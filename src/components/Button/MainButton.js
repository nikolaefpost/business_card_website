import React from 'react';
import {Link} from "react-router-dom";
import classNames from "classnames";
import styles from "./Button.module.scss";

const MainButton = ({path}) => {
    return (
        <>
            <Link className={classNames(styles.link_style)} to={path}>ещё</Link>
        </>
    );
};

export default MainButton;