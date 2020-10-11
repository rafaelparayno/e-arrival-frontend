import React from 'react'

export const Pagination = ({ rowsPerPage, total, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(total / rowsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul style={{ margin: 0 }} className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href='#' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;
