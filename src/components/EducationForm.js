import React, { Component } from "react";
import ResumeSection from "./ResumeSection";
import Field from "./Field";

class EducationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      degree: "",
      school: "",
      city: "",
      startDate: "",
      endDate: "",
      description: "",
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
    this.setState({ disabled: true })
  }

  handleEdit() {
    this.setState({ disabled: false });
  }

  render() {
    return (
      <ResumeSection title={this.props.title}>
          <form onSubmit={(event) => { this.handleSubmit(event); this.props.onSave(this.state, 'education') }} className="form personal">
            <Field 
              fieldType="text" 
              name="degree" 
              label="Degree" 
              placeholder={""} 
              value={this.state.degree} 
              onChange={this.handleChange} 
              disabled={this.state.disabled}
            />
            <Field 
              fieldType="text" 
              name="school" 
              label="University or School" 
              placeholder={""} 
              value={this.state.school} 
              onChange={this.handleChange} 
              disabled={this.state.disabled}
            />
            <Field 
              fieldType="text" 
              name="city" 
              label="City" 
              placeholder={""} 
              value={this.state.locationEducation} 
              onChange={this.handleChange}
              disabled={this.state.disabled}
            />

            <Field 
              fieldType="text" 
              name="startDate" 
              label="Start Date" 
              placeholder={"YYYY"} 
              value={this.state.startDate} 
              onChange={this.handleChange}
              disabled={this.state.disabled}
            />
            <Field 
              fieldType="text" 
              name="endDate" 
              label="End Date" 
              placeholder={"YYYY or Present"} 
              value={this.state.endDate} 
              onChange={this.handleChange}
              disabled={this.state.disabled}
            />

            <div className="field">
              <label htmlFor="description" className="label">Description or Achievements (optional)</label>
              <textarea 
                name="description" 
                id="description" 
                cols="30" 
                rows="10" 
                value={this.state.description} 
                onChange={this.handleChange}
                disabled={this.state.disabled}>
              </textarea>
            </div>

            <button type="submit">Save</button>
          </form>
          <button type="button" onClick={this.handleEdit}>Edit</button>
      </ResumeSection>
    );
  }
}

export default EducationForm;