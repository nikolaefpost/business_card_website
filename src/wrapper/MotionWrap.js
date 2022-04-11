import React from 'react';
import {motion} from "framer-motion";
import classnames from "classnames";
import styles from "./wrapper.module.scss"



const MotionWrap = (Component, className) => function HOC (){
    console.log(Component.props)
    return (
        <motion.div
            whileInView={{y: [100, 50, 0], opacity: [0, 0, 1]}}
            transition={{duration: .5}}
            className={classnames( className)}
        >
            <Component/>
        </motion.div>
    );
};

export default MotionWrap;