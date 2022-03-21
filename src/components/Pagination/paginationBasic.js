import React from 'react';
import {Pagination} from "react-bootstrap";

const PaginationBasic = ({active, numb, paginHandle}) => {
    let items = [];
    for (let number = 1; number <= numb; number++) {
        console.log(number)
        items.push(
            <Pagination.Item key={number} active={number === active}
                             onClick={()=>paginHandle(number)}
            >
                {number}
            </Pagination.Item>,
        );
    }
    console.log(items)
    return (
        <div>
            <Pagination>{items}</Pagination>
        </div>
    );
};

export default PaginationBasic;