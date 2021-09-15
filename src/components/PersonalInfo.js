import React, { Component } from "react";
import ResumeSection from "./ResumeSection";
import Field from "./Field";

class PersonalInfo extends Component {
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
    };      

    // Bind all methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  };

  // Adjusts state on every change to an input field
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // There is no need to 'capture' data on submit, as the state will already be up to date with every input field anyway
  handleSubmit(event) {
    // Adjust appearance/behaviour of input fields to prevent modification (unless edit is pressed)
    console.log(this.state);
    event.preventDefault();
  }

  

  render() {
    return (
      <ResumeSection>
          <form onSubmit={this.handleSubmit} className="form personal">
            <Field fieldType="text" name="firstName" label="First Name" placeholder={""} value={this.state.firstName} onChange={this.handleChange} />
            <Field fieldType="text" name="lastName" label="Last Name" placeholder={""} onChange={this.handleChange}/>
            <Field fieldType="text" name="addressOne" label="Address Line 1" placeholder={""} onChange={this.handleChange}/>
            <Field fieldType="text" name="addressTwo" label="Address Line 2" placeholder={""} onChange={this.handleChange}/>
            <Field fieldType="text" name="state" label="State" placeholder={""} onChange={this.handleChange}/>
            <Field fieldType="text" name="country" label="Country" placeholder={""} onChange={this.handleChange}/>
            <Field fieldType="text" name="postcode" label="Postcode" placeholder={""} onChange={this.handleChange}/>
            <Field fieldType="email" name="email" label="Email Address" placeholder={""} onChange={this.handleChange}/>
            <Field fieldType="text" name="phone" label="Phone Number" placeholder={""} onChange={this.handleChange}/>
            <button type="submit">Save</button>
          </form>
          <button type="button">Edit</button>
      </ResumeSection>
    );
  }
}

export default PersonalInfo;
