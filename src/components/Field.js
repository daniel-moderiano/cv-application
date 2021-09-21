import React from 'react'

const Field = (props) => {
  const { fieldType, name, label, value, placeholder, onChange, disabled } = props;

  return (
    <div className="field">
      <label htmlFor="">{label}</label>
      <input name={name} type={fieldType} value={value} placeholder={placeholder} onChange={onChange} disabled={disabled}/>
    </div> 
  );
}

export default Field;
