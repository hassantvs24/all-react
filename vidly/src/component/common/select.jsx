import React from 'react';

const Select = ({name, label, error, options, ...rest}) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select  {...rest} name={name} id={name} className="form-control">
                {options.map(option => <option key={option._id} value={option._id}>{option.name}</option>)}
            </select>
            {error && <small className="form-text text-danger">{error}</small>}
        </div>
     );
}
 
export default Select;