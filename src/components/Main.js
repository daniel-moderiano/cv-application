import React, { Component } from "react";
import ResumeSection from "./ResumeSection";
import PersonalInfoForm from "./PersonalInfoForm";
import ProfessionalExpForm from "./ProfessionalExpForm";
import EducationForm from "./EducationForm";
import { nanoid } from "nanoid";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: [],
      professional: [],
      education: [],
    };

    this.handleFormData = this.handleFormData.bind(this);
  }

  handleFormData(formData, formName) {
    // Convert the form data to an array to enable us to filter the disable property from the saved data
    const filteredData =  (Object.entries(formData)).filter((entry) => entry[0] !== 'disabled');

    // Check if there is an entry with the ID to be saved; if so, edit rather than concat
    const dataIndex = this.state[formName].findIndex((data) => data.id === formData.id);

    if (dataIndex === -1) {
      this.setState({ [formName]: this.state[formName].concat(Object.fromEntries(filteredData)) });
    } else {
      this.setState({ [formName]: this.state[formName].map((data) => {
        if (data.id === formData.id) {
          data = Object.fromEntries(filteredData);
        }
        return data;
      }) });
    }
    
    console.log(this.state);
  }

  render() {
    return (
      <main className="main">

        <ResumeSection title={'Personal Information'}>
          <PersonalInfoForm onSave={this.handleFormData} id={nanoid()} />
        </ResumeSection>

        <ResumeSection title={'Professional Experience'}>
          <ProfessionalExpForm onSave={this.handleFormData} id={nanoid()} />
        </ResumeSection>

        <ResumeSection title={'Education'}>
          <EducationForm onSave={this.handleFormData} id={nanoid()} />
        </ResumeSection>

      </main>
    );
  }
};

export default Main;
