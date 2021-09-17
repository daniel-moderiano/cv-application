import React, { Component } from "react";
import Field from "./Field";

class ProfessionalExpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      position: "",
      company: "",
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
    this.setState({ disabled: true });
  }
  
  handleEdit() {
    this.setState({ disabled: false });
  }

  render() {
    return (
      <form onSubmit={(event) => { this.handleSubmit(event); this.props.onSave(this.state, 'professional') }} className="form personal">
        <Field 
          fieldType="text" 
          name="position" 
          label="Position" 
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
          name="city" 
          label="City" 
          placeholder={""} 
          value={this.state.city} 
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
          <label htmlFor="description" className="label">Job description (optional)</label>
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
        <button type="button" onClick={this.handleEdit}>Edit</button>
      </form>
    );
  }
}

export default ProfessionalExpForm;