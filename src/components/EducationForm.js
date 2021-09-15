import React, { Component } from "react";
import ResumeSection from "./ResumeSection";
import Field from "./Field";

class EducationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      qualification: "",
      institute: "",
      locationEducation: "",
      graduation: "",
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
              name="qualification" 
              label="Qualification/Certificate" 
              placeholder={""} 
              value={this.state.qualification} 
              onChange={this.handleChange} 
            />
            <Field 
              fieldType="text" 
              name="institute" 
              label="Educational Institute" 
              placeholder={""} 
              value={this.state.institute} 
              onChange={this.handleChange} 
            />
            <Field 
              fieldType="text" 
              name="locationEducation" 
              label="Location" 
              placeholder={""} 
              value={this.state.locationEducation} 
              onChange={this.handleChange} 
            />
            <Field 
              fieldType="text" 
              name="graduation" 
              label="Graduation Date" 
              placeholder={""} 
              value={this.state.graduation} 
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

export default EducationForm;