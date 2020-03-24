import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Pagination =  props => {
    const {itemCount, pageSize, currentPage, onPageChange} = props;
    const pageCount = Math.ceil(itemCount / pageSize);
    if(pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);

    return ( 
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map(page => (
                    <li className={page===currentPage ? 'page-item active' : 'page-item'} key={page}><button className="page-link" onClick={() => onPageChange(page)} >{page}</button></li>
                ))}
                
            </ul>
        </nav>
     );
}
 
Pagination.propTypes = {
    itemCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}
 
export default Pagination;