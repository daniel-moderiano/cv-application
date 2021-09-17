import React, { Component } from "react";
import ResumeSection from "./ResumeSection";
import Field from "./Field";
import PersonalInfoForm from "./PersonalInfoForm";
import ProfessionalExpForm from "./ProfessionalExpForm";
import EducationForm from "./EducationForm";
import { nanoid } from "nanoid";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: [],
      professionalExp: [],
      education: [],
      interests: {},
    };

    this.handleFormData = this.handleFormData.bind(this);
  }

  handleFormData(formData, formName) {
    // Convert the form data to an array to enable us to filter the disable property from the saved data
    const filteredData =  (Object.entries(formData)).filter((entry) => entry[0] !== 'disabled');
    this.setState({ [formName]: Object.fromEntries(filteredData) });
    console.log(this.state);
  }

  render() {
    return (
      <main className="main">

        

        

        <ResumeSection title={'Personal Information'}>
          <PersonalInfoForm onSave={this.handleFormData} />
        </ResumeSection>

        <ResumeSection title={'Professional Experience'}>
          <ProfessionalExpForm onSave={this.handleFormData} />
        </ResumeSection>
        

        <ResumeSection title={'Education'}>
          <EducationForm onSave={this.handleFormData} />
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
