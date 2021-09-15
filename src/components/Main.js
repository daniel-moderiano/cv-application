import React, { Component } from "react";
import ResumeSection from "./ResumeSection";
import Field from "./Field";
import PersonalInfo from "./PersonalInfo";
import { nanoid } from "nanoid";

class Main extends Component {

  render() {
    return (
      <main className="main">

        <ResumeSection title="Summary">
          <textarea className="summary" name="summary" id="summar" cols="30" rows="10"></textarea>
        </ResumeSection>

        <PersonalInfo />

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
