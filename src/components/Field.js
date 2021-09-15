import React, { Component } from 'react'

class Field extends Component {
  render() {
    const { fieldType, name, label, value, placeholder, onChange } = this.props;
    return (
      <div className="field">
        <label htmlFor="">{label}</label>
        <input name={name} type={fieldType} value={value} placeholder={placeholder} onChange={onChange}/>
      </div>  
    );
  }
};

export default Field;
