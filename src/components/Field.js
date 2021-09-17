import React, { Component } from 'react';
import '../styles/field.css';

class Field extends Component {

  disableInput() {

  }

  render() {
    const { fieldType, name, label, value, placeholder, onChange, disabled } = this.props;
    return (
      <div className="field">
        <label htmlFor="">{label}</label>
        <input name={name} type={fieldType} value={value} placeholder={placeholder} onChange={onChange} disabled={disabled}/>
      </div>  
    );
  }
};

export default Field;
