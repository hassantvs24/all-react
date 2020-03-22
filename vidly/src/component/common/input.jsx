import React from 'react';

const Input = ({name, type, label, value, onChange}) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input name={name} type={type} className="form-control" id={name} placeholder={label} value={value} onChange={onChange} />
        </div>
     );
}
 
export default Input;