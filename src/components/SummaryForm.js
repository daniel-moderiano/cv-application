import React, { Component } from "react";
import ResumeSection from "./ResumeSection";

class SummaryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      summary: "Provide a description of your professional self",
    };      

    // Bind all methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <ResumeSection>
          <form onSubmit={this.handleSubmit} className="form personal">
            <textarea name="summary" id="summary" cols="30" rows="10" value={this.state.summary} onChange={this.handleChange}></textarea>
            <button type="submit">Save</button>
          </form>
          <button type="button">Edit</button>
      </ResumeSection>
    );
  }
}

export default SummaryForm;
