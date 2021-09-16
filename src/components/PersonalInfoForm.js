import React, { Component } from "react";
import ResumeSection from "./ResumeSection";
import Field from "./Field";

class PersonalInfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      addressOne: "",
      addressTwo: "",
      locationState: "",
      country: "",
      postcode: "",
      email: "",
      phone: "",
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
      <ResumeSection title={this.props.title}>
          <form onSubmit={this.handleSubmit} className="form personal">
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
              fieldType="text" 
              name="locationState" 
              label="State" 
              placeholder={""} 
              value={this.state.locationState} 
              onChange={this.handleChange}
              disabled={this.state.disabled}
            />
            <Field 
              fieldType="text" 
              name="country" 
              label="Country" 
              placeholder={""}
              value={this.state.country} 
              onChange={this.handleChange}
              disabled={this.state.disabled}
            />
            <Field 
              fieldType="text" 
              name="postcode" 
              label="Postcode" 
              placeholder={""} 
              value={this.state.postcode} 
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
            <button type="submit">Save</button>
          </form>
          <button type="button" onClick={this.handleEdit}>Edit</button>
      </ResumeSection>
    );
  }
}

export default PersonalInfoForm;
