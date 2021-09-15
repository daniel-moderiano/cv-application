import React, { Component } from 'react'

class Field extends Component {
  render() {
    const { fieldType, name, label, value } = this.props;
    return (
      <div className="field">
        <label htmlFor="">{label}</label>
        <input name={name} type={fieldType} value={value} />
      </div>  
    );
  }
};

export default Field;
