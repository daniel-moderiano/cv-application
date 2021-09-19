import React, { Component } from 'react'

export default class EducationSection extends Component {
  render() {
    return (
      <div className="education">
        <h2 className="education__title">Education</h2>
        <div className="education__section">
          <div className="education__school">{this.props.data.school}</div>
          <div className="education__city">{this.props.data.city}</div>
          <div className="education__degree">{this.props.data.degree}</div>
          <div className="education__start">{this.props.data.startDate}</div>
          <div className="education__end">{this.props.data.endDate}</div>
          <div className="education__desc">{this.props.data.description}</div>
        </div>
      </div>
    );
  }
}

