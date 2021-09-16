import React, { Component } from "react";
import ResumeSection from "./ResumeSection";
import Field from "./Field";

class ProfessionalExpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: "",
      company: "",
      locationWork: "",
      durationWork: "",
      keyPoints: "",
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
      <ResumeSection title={this.props.title}>
          <form onSubmit={this.handleSubmit} className="form personal">
            <Field 
              fieldType="text" 
              name="position" 
              label="Position/Title" 
              placeholder={""} 
              value={this.state.position} 
              onChange={this.handleChange} 
            />
            <Field 
              fieldType="text" 
              name="company" 
              label="Company" 
              placeholder={""} 
              value={this.state.company} 
              onChange={this.handleChange} 
            />
            <Field 
              fieldType="text" 
              name="locationWork" 
              label="Location" 
              placeholder={""} 
              value={this.state.locationWork} 
              onChange={this.handleChange} 
            />
            <Field 
              fieldType="text" 
              name="durationWork" 
              label="Duration of work" 
              placeholder={""} 
              value={this.state.durationWork} 
              onChange={this.handleChange} 
            />
            <Field 
              fieldType="text" 
              name="keyPoints" 
              label="Key points" 
              placeholder={""} 
              value={this.state.keyPoints} 
              onChange={this.handleChange} 
            />

            <button type="submit">Save</button>
          </form>
          <button type="button">Edit</button>
      </ResumeSection>
    );
  }
}

export default ProfessionalExpForm;