import React from 'react';
import {Pagination} from "react-bootstrap";
import styles from "./Pagination.module.scss"

const PaginationBasic = ({active, numb, paginHandle}) => {
    let items = [];
    for (let number = 1; number <= numb; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}
                             onClick={()=>paginHandle(number)} className={styles.color}
            >
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <div>
            <Pagination >{items}</Pagination>
        </div>
    );
};

export default PaginationBasic;