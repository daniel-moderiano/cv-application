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
              name="qualification" 
              label="Qualification/Certificate" 
              placeholder={""} 
              value={this.state.qualification} 
              onChange={this.handleChange} 
              disabled={this.state.disabled}
            />
            <Field 
              fieldType="text" 
              name="institute" 
              label="Educational Institute" 
              placeholder={""} 
              value={this.state.institute} 
              onChange={this.handleChange} 
              disabled={this.state.disabled}
            />
            <Field 
              fieldType="text" 
              name="locationEducation" 
              label="Location" 
              placeholder={""} 
              value={this.state.locationEducation} 
              onChange={this.handleChange}
              disabled={this.state.disabled}
            />
            <Field 
              fieldType="text" 
              name="graduation" 
              label="Graduation Date" 
              placeholder={""} 
              value={this.state.graduation} 
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