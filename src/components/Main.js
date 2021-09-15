import React, { Component } from "react";
import ResumeSection from "./ResumeSection";
import Field from "./Field";
import { nanoid } from "nanoid";

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {};      
  };

  render() {
    return (
      <main className="main">

        <ResumeSection title="Summary">
          <textarea className="summary" name="summary" id="summar" cols="30" rows="10"></textarea>
        </ResumeSection>

        <ResumeSection title="Personal Information">
          <Field fieldType="text" name="first-name" label="First Name" />
          <Field fieldType="text" name="last-name" label="Last Name" />
          <Field fieldType="text" name="address-one" label="Address Line 1" />
          <Field fieldType="text" name="address-two" label="Address Line 2" />
          <Field fieldType="text" name="state" label="State" />
          <Field fieldType="text" name="country" label="Country" />
          <Field fieldType="text" name="postcode" label="Postcode" />
        </ResumeSection>

        <ResumeSection title="Professional Experience">
          <Field fieldType="text" name="position" label="Position title" />
          <Field fieldType="text" name="company" label="Company" />
          <Field fieldType="text" name="location-work" label="Location" />
          <Field fieldType="text" name="duration-work" label="Duration of work" />
          <Field fieldType="text" name="key-points" label="Key points" />
          <Field fieldType="text" name="key-points" label="Key points" />
        </ResumeSection>

        <ResumeSection title="Professional Experience">
          <Field fieldType="text" name="qualification" label="Qualification/Certificate" />
          <Field fieldType="text" name="institute" label="Educational institute" />
          <Field fieldType="text" name="location-education" label="Location" />
          <Field fieldType="text" name="graduation" label="Graduation date" />
          <Field fieldType="text" name="key-points" label="Key points" />
        </ResumeSection>

        <ResumeSection title="Interests">
          <Field fieldType="text" name="interest" label="Interest" />
          <Field fieldType="text" name="interest" label="Interest" />
          <Field fieldType="text" name="interest" label="Interest" />
        </ResumeSection>

      </main>
    );
  }
};

export default Main;
