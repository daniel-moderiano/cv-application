import React, { Component } from 'react'

export default class EducationSection extends Component {
  render() {
    return (
      <div className="education__section">
        <div className="education__school">{this.props.data.school}</div>
        <div className="education__city">{this.props.data.city}</div>
        <div className="education__degree">{this.props.data.degree}</div>
        <div className="education__time"><div className="professional__time">{`${this.props.data.startDate} - ${this.props.data.endDate}`}</div></div>
        <div className="education__desc">{this.props.data.description}</div>
      </div>

    );
  }
}

