import React, { Component } from 'react'

export default class ProfessionalSection extends Component {
  render() {
    return (
      <div className="professional__section">
        <div className="professional__company">{this.props.data.company}</div>
        <div className="professional__city">{this.props.data.city}</div>
        <div className="professional__job">{this.props.data.position}</div>
        <div className="professional__time">{`${this.props.data.startDate} - ${this.props.data.endDate}`}</div>
        <div className="professional__desc">{this.props.data.description}</div>
      </div>
    );
  }
}
