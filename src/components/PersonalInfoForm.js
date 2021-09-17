import React, { Component } from "react";
import Field from "./Field";

class PersonalInfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      currentRole: "",
      addressOne: "",
      addressTwo: "",
      email: "",
      phone: "",
      linkedin: "",
      summary: "Small bio about yourself",
      disabled: false,
    };      

    // Bind all methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

  };

  // Adjusts state on every change to an input field
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // There is no need to 'capture' data on submit, as the state will already be up to date with every input field anyway
  handleSubmit(event) {
    // Adjust appearance/behaviour of input fields to prevent modification (unless edit is pressed)
    
    this.setState({ disabled: true });
    event.preventDefault();
  }

  handleEdit() {
    this.setState({ disabled: false });
  }

  render() {
    return (
      <form onSubmit={(event) => { this.handleSubmit(event); this.props.onSave(this.state, 'personal') }} className="form personal">
        <Field 
          fieldType="text" 
          name="firstName" 
          label="First Name" 
          placeholder={""} 
          value={this.state.firstName} 
          onChange={this.handleChange} 
          disabled={this.state.disabled}
        />
        <Field 
          fieldType="text" 
          name="lastName" 
          label="Last Name" 
          placeholder={""} 
          value={this.state.lastName} 
          onChange={this.handleChange}
          disabled={this.state.disabled}
        />
        <Field 
          fieldType="text" 
          name="currentRole" 
          label="Current Role" 
          placeholder={""} 
          value={this.state.currentRole} 
          onChange={this.handleChange}
          disabled={this.state.disabled}
        />
        <Field 
          fieldType="text" 
          name="addressOne" 
          label="Address Line 1" 
          placeholder={""} 
          value={this.state.addressOne} 
          onChange={this.handleChange}
          disabled={this.state.disabled}
          />
        <Field 
          fieldType="text" 
          name="addressTwo" 
          label="Address Line 2" 
          placeholder={""} 
          value={this.state.addressTwo} 
          onChange={this.handleChange}
          disabled={this.state.disabled}
          />
        <Field 
          fieldType="email" 
          name="email" 
          label="Email Address" 
          placeholder={""} 
          value={this.state.email} 
          onChange={this.handleChange}
          disabled={this.state.disabled}
        />
        <Field 
          fieldType="text" 
          name="phone" 
          label="Phone Number" 
          placeholder={""} 
          value={this.state.phone} 
          onChange={this.handleChange}
          disabled={this.state.disabled}
        />
        <Field 
          fieldType="url" 
          name="linkedin" 
          label="LinkedIn" 
          placeholder={""} 
          value={this.state.linkedin} 
          onChange={this.handleChange}
          disabled={this.state.disabled}
        />

        <div className="field">
          <label htmlFor="summary">Summary</label>
          <textarea name="summary" id="summary" cols="30" rows="10" value={this.state.summary} onChange={this.handleChange} disabled={this.state.disabled}></textarea>
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={this.handleEdit}>Edit</button>
      </form>
    );
  }
}

export default PersonalInfoForm;
