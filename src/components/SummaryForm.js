import React, { Component } from "react";
import ResumeSection from "./ResumeSection";

class SummaryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      summary: "Provide a description of your professional self",
      disabled: false,
    };      

    // Bind all methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ disabled: true });
  }
  
  handleEdit() {
    this.setState({ disabled: false });
  }

  render() {
    return (
      <ResumeSection title={this.props.title}>
          <form onSubmit={this.handleSubmit} className="form personal">
            <textarea name="summary" id="summary" cols="30" rows="10" value={this.state.summary} onChange={this.handleChange} disabled={this.state.disabled}></textarea>
            <button type="submit">Save</button>
          </form>
          <button type="button" onClick={this.handleEdit}>Edit</button>
      </ResumeSection>
    );
  }
}

export default SummaryForm;
