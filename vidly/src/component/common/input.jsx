import React from 'react';

const Input = ({name, label, error, ...rest}) => { // ...rest are equivalent to other input parameter without name, label, error
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input {...rest} name={name} id={name} placeholder={label}  className="form-control" />
            {error && <small className="form-text text-danger">{error}</small>}
        </div>
     );
}
 
export default Input;