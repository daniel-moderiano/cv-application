import React, { Component } from "react";
import ResumeSection from "./ResumeSection";
import Field from "./Field";
import SummaryForm from "./SummaryForm";
import PersonalInfoForm from "./PersonalInfoForm";
import ProfessionalExpForm from "./ProfessionalExpForm";
import EducationForm from "./EducationForm";
import { nanoid } from "nanoid";

class Main extends Component {

  render() {
    return (
      <main className="main">

        <SummaryForm title={'Summary'} />

        <PersonalInfoForm title={'Personal Information'}/>

        <ProfessionalExpForm title={'Professional Experience'}/>

        <EducationForm title={'Education'}/>

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
