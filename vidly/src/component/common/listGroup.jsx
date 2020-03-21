import React from 'react';

const ListGroup = ({items, selectedItem, textProperty, valueProperty, onItemSelect}) => {
    return (  
        <ul className="list-group">
            {items.map( item =>
                <li className={item === selectedItem ? "list-group-item active" : "list-group-item"} onClick={() => onItemSelect(item)} style={{ cursor: 'pointer' }} key={item[valueProperty]}>{item[textProperty]}</li>
            )}
                
        </ul>
    );
};

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
};
 
export default ListGroup;