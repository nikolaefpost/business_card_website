import React from 'react';
import {CloseButton, Modal} from "react-bootstrap";
import styles from "./Modal.module.scss"

const Modal_ = ({show, handleClose, children}) => {
    return (
        <div className={styles.wraper}>
            <Modal show={show} onHide={handleClose} fullscreen >
                <Modal.Body className={styles.wraper}>
                    <CloseButton variant="white" className={styles.close} onClick={handleClose} />
                    {children}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Modal_;