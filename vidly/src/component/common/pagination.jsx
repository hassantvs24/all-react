import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
    const {itemCount, pageSize} = props;
    const pageCount = Math.ceil(itemCount / pageSize);
    if(pageCount == 1) return null;
    const pages = _.range(1, pageCount + 1);

    return ( 
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map(page => (
                    <li className="page-item" key={page}><a className="page-link">{page}</a></li>
                ))}
                
            </ul>
        </nav>
     );
}
 
 
export default Pagination;