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
      profForms: 1,
      eduForms: 1,
      personal: [],
      professional: [],
      education: [],
    };

    this.handleFormData = this.handleFormData.bind(this);
    this.addEduForm = this.addEduForm.bind(this);
    this.addProfForm = this.addProfForm.bind(this);
    this.deleteEduForm= this.deleteEduForm.bind(this);
    this.deleteProfForm = this.deleteProfForm.bind(this);


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

  addProfForm() {
    if (this.state.profForms < 5) {
      this.setState({ profForms: this.state.profForms + 1 });
    }
  }

  addEduForm() {
    if (this.state.eduForms < 5) {
      this.setState({ eduForms: this.state.eduForms + 1 });
    }
  }

  deleteProfForm() {
    if (this.state.profForms > 1) {
      this.setState({ profForms: this.state.profForms - 1 });
    }
  }

  deleteEduForm() {
    if (this.state.eduForms > 1) {
      this.setState({ eduForms: this.state.eduForms - 1 });
    }
  }

  render() {
    const profForms = [];
    const eduForms = [];

    for (let i = 0; i < this.state.profForms; i++) {
      profForms.push(
        <ProfessionalExpForm 
          onSave={this.handleFormData} 
          onAdd={this.addProfForm}
          onDelete={this.deleteProfForm}
          id={nanoid()} 
        />
      );
    }

    for (let i = 0; i < this.state.eduForms; i++) {
      eduForms.push(
        <EducationForm 
          onSave={this.handleFormData} 
          onAdd={this.addEduForm}
          onDelete={this.deleteEduForm}
          id={nanoid()} 
        />
      );
    }

    
    


    return (
      <main className="main">

        <ResumeSection title={'Personal Information'}>
          <PersonalInfoForm onSave={this.handleFormData} id={nanoid()} />
        </ResumeSection>

        <ResumeSection title={'Professional Experience'}>
          {profForms}
        </ResumeSection>

        <ResumeSection title={'Education'}>
          {eduForms}
        </ResumeSection>

      </main>
    );
  }
};

export default Main;
