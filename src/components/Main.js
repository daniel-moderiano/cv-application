import React, { useState } from "react";
import ResumeSection from "./ResumeSection";
import PersonalInfoForm from "./PersonalInfoForm";
import ProfessionalExpForm from "./ProfessionalExpForm";
import EducationForm from "./EducationForm";
import ProfessionalSection from "./ProfessionalSection";
import PersonalSection from "./PersonalSection";
import { nanoid } from "nanoid";
import EducationSection from "./EducationSection";

const Main = () => {
  
  const [profForms, setProfForms] = useState(1);
  const [eduForms, setEduForms] = useState(1);

  const [forms, setForms] = useState({
    personal: [],
    professional: [],
    education: [],
  });


  const handleFormData = (formData, formName) => {
    // Check if there is an entry with the ID to be saved; if so, edit rather than concat
    const dataIndex = forms[formName].findIndex((data) => data.id === formData.id);

    if (dataIndex === -1) {
      setForms({ ...forms, [formName]: forms[formName].concat(formData) });
    } else {
      setForms({ ...forms, [formName]: forms[formName].map((data) => {
        if (data.id === formData.id) {
          data = formData;
        }
        return data;
      }) });
    }
  };

  const addProfForm = () => {
    if (profForms < 5) {
      setProfForms(profForms + 1);
    }
  };

  const addEduForm = () => {
    if (eduForms < 5) {
      setEduForms(eduForms + 1);
    }
  };

  const deleteProfForm = (dataId) => {
    if (profForms > 1) {
      setProfForms(profForms - 1);
      setForms({ professional: forms.professional.filter((data) => data.id !== dataId) });
    }
  }

  const deleteEduForm = (dataId) => {
    if (eduForms > 1) {
      setEduForms(eduForms - 1);
      this.setState({ education: forms.education.filter((data) => data.id !== dataId) });
    }
  }

  const createEduForms = () => {
    const eduDOMForms = [];

    for (let i = 0; i < eduForms; i++) {
      eduDOMForms.push(
        <EducationForm 
          onSave={handleFormData} 
          onAdd={addEduForm}
          onDelete={deleteEduForm}
          id={nanoid()} 
          index={i}
          key={i}
        />
      );
    }

    return eduDOMForms;
  }

  const createProfForms = () => {
    const profDOMForms = [];
  
    for (let i = 0; i < profForms; i++) {
      profDOMForms.push(
        <ProfessionalExpForm 
          onSave={handleFormData} 
          onAdd={addProfForm}
          onDelete={deleteProfForm}
          id={nanoid()} 
          index={i}
          key={i}
        />
      );
    }

    return profDOMForms;
  }

  const educationSections = forms.education.map((data, index) => (<EducationSection data={data} key={index} />));
  const professionalSections = forms.professional.map((data, index) => (<ProfessionalSection data={data} key={index} />));

  return (
    <main className="main">
      <div className="generator">
        <ResumeSection title={'Personal Information'}>
          <PersonalInfoForm onSave={handleFormData} id={nanoid()} />
        </ResumeSection>

        <ResumeSection title={'Professional Experience'}>
          {createProfForms()}
        </ResumeSection>

        <ResumeSection title={'Education'}>
          {createEduForms()}
        </ResumeSection>
      </div>
      
      <div className="resume">
        <PersonalSection data={forms.personal[0] ? forms.personal[0] : ""}/>

        <div className="education">
          <h2 className="education__title">Education</h2>
          {educationSections}
        </div>

        <div className="professional">
          <h2 className="professional__title">Professional Experience</h2>
          {professionalSections}
        </div>
      </div>
    </main>
  )
}

export default Main;