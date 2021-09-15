import React, { Component } from "react";

class ResumeSection extends Component {
  render() {
    return (
      <section className="resume-section">
        <h2 className="resume-section__header">{this.props.title}</h2>
        <div className="resume-section__content"></div>
      </section>
    );
  }
}

export default ResumeSection;
