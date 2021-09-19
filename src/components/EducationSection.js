import React, { Component } from 'react'

export default class EducationSection extends Component {
  render() {
    return (
      <div className="education">
        <h2 className="education__title">Education</h2>
        {/* <!-- Professional/education section can be abstracted to component to replicate as needed --> */}
        <div className="education__section">
          <div className="education__school">Harvard University</div>
          <div className="education__city">New York</div>
          <div className="education__degree">Bachelor of Law</div>
          <div className="education__start">From 2000</div>
          <div className="education__end">To 2004</div>
          <div className="education__desc"></div>
        </div>
      </div>
    );
  }
}

