import React, { Component } from 'react'

export default class ProfessionalSection extends Component {
  render() {
    return (
      <div className="professional">
        <h2 className="professional__title">Professional Experience</h2>
        {/* <!-- Professional/education section can be abstracted to component to replicate as needed --> */}
        <div className="professional__section">
          <div className="professional__company">Harvard University</div>
          <div className="professional__city">New York</div>
          <div className="professional__job">Bachelor of Law</div>
          <div className="professional__start">From 2000</div>
          <div className="professional__end">To 2004</div>
          <div className="professional__desc"></div>
        </div>
      </div>
    )
  }
}
