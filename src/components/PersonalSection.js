import React, { Component } from 'react'

export default class PersonalSection extends Component {
  render() {
    return (
      <div className="personal">
        <div className="header">
          <h1 className="personal__name">{this.props.data.firstName} {this.props.data.lastName}</h1>
          <h2 className="personal__title">{this.props.data.currentRole}</h2>
        </div>
        <div className="personal__info">
          <div className="personal__address-one">{this.props.data.addressOne}</div>
          <div className="personal__address-two">{this.props.data.addressTwo}</div>
          <div className="personal__phone">{this.props.data.phone}</div>
          <div className="personal__email">{this.props.data.email}</div>
          <div className="personal__linkedin">{this.props.data.linkedin}</div>
        </div>
        <div className="summary">
          <h2 className="summary__title">Summary</h2>
          <p className="summary__text">{this.props.data.summary}</p>
        </div>
      </div>
      
    );
  }
}
