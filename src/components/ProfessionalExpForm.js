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
          <form onSubmit={(event) => { this.handleSubmit(event); this.props.onSave(this.state, 'professional') }} className="form personal">
            <Field 
              fieldType="text" 
              name="position" 
              label="Position/Title" 
              placeholder={""} 
              value={this.state.position} 
              onChange={this.handleChange}
              disabled={this.state.disabled}
            />
            <Field 
              fieldType="text" 
              name="company" 
              label="Company" 
              placeholder={""} 
              value={this.state.company} 
              onChange={this.handleChange}
              disabled={this.state.disabled}
            />
            <Field 
              fieldType="text" 
              name="locationWork" 
              label="Location" 
              placeholder={""} 
              value={this.state.locationWork} 
              onChange={this.handleChange}
              disabled={this.state.disabled}
            />
            <Field 
              fieldType="text" 
              name="durationWork" 
              label="Duration of work" 
              placeholder={""} 
              value={this.state.durationWork} 
              onChange={this.handleChange}
              disabled={this.state.disabled}
            />
            <Field 
              fieldType="text" 
              name="keyPoints" 
              label="Key points" 
              placeholder={""} 
              value={this.state.keyPoints} 
              onChange={this.handleChange}
              disabled={this.state.disabled}
            />

            <button type="submit">Save</button>
          </form>
          <button type="button" onClick={this.handleEdit}>Edit</button>
      </ResumeSection>
    );
  }
}

export default ProfessionalExpForm;