import React, { Component } from "react";
import ResumeSection from "./ResumeSection";
import Field from "./Field";
import SummaryForm from "./SummaryForm";
import PersonalInfoForm from "./PersonalInfoForm";
import ProfessionalExpForm from "./ProfessionalExpForm";
import { nanoid } from "nanoid";

class Main extends Component {

  render() {
    return (
      <main className="main">

        <SummaryForm title={'Summary'} />

        <PersonalInfoForm title={'Personal Information'}/>

        <ProfessionalExpForm title={'Professional Experience'}/>

        <ResumeSection title="Education">
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
