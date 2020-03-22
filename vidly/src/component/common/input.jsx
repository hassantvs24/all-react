import React from 'react';

const Input = ({name, type, label, value, error, onChange}) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input name={name} type={type} className="form-control" id={name} placeholder={label} value={value} onChange={onChange} />
            {error && <small className="form-text text-danger">{error}</small>}
        </div>
     );
}
 
export default Input;