import React, { Component } from "react";
import ResumeSection from "./ResumeSection";
import PersonalInfoForm from "./PersonalInfoForm";
import ProfessionalExpForm from "./ProfessionalExpForm";
import EducationForm from "./EducationForm";
import ProfessionalSection from "./ProfessionalSection";
import PersonalSection from "./PersonalSection";
import { nanoid } from "nanoid";
import EducationSection from "./EducationSection";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profForms: 1,
      eduForms: 1,
      personal: [],
      professional: [],
      education: [],
      template: {
        firstName: "",
        lastName: "",
        currentRole: "",
        addressOne: "",
        addressTwo: "",
        email: "",
        phone: "",
        linkedin: "",
        summary: "Small bio about yourself",
      },
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

  deleteProfForm(dataId) {
    if (this.state.profForms > 1) {
      this.setState({ profForms: this.state.profForms - 1 });
      this.setState({ professional: this.state.professional.filter((data) => data.id !== dataId) });
    }
  }

  deleteEduForm(dataId) {
    if (this.state.eduForms > 1) {
      this.setState({ eduForms: this.state.eduForms - 1 });
      this.setState({ education: this.state.education.filter((data) => data.id !== dataId) });
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
          index={i}
          key={i}
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
          index={i}
          key={i}
        />
      );
    }

    const educationSections = this.state.education.map((data, index) => (<EducationSection data={data} key={index} />));
    const professionalSections = this.state.professional.map((data, index) => (<ProfessionalSection data={data} key={index} />));

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
        
        <div className="resume">
 

          <PersonalSection data={this.state.personal[0] ? this.state.personal[0] : this.state.template}/>
          {educationSections}
          {professionalSections}

        </div>


      </main>
    );
  }
};

export default Main;
