import React, { Component } from 'react'

export default class ProfessionalSection extends Component {
  render() {
    return (
      <div className="professional">
        <h2 className="professional__title">Professional Experience</h2>

        <div className="professional__section">
          <div className="professional__company">{this.props.data.company}</div>
          <div className="professional__city">{this.props.data.city}</div>
          <div className="professional__job">{this.props.data.position}</div>
          <div className="professional__start">{this.props.data.startDate}</div>
          <div className="professional__end">{this.props.data.endDate}</div>
          <div className="professional__desc">{this.props.data.description}</div>
        </div>
      </div>
    );
  }
}
