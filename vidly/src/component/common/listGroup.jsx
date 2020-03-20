import React from 'react';

const ListGroup = (props) => {
    const {items, textProperty, valueProperty} = props;
    return (  
    <ul className="list-group">
        {/* <li className="list-group-item active" style={{ cursor: 'pointer' }}>All Genre</li> */}
          {items.map( item =>
            <li className="list-group-item" onClick={() => props.onItemSelect(item)} style={{ cursor: 'pointer' }} key={item[valueProperty]}>{item[textProperty]}</li>
          )}
            
    </ul>
);
}
 
export default ListGroup;