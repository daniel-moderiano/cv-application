import React, { Component } from "react";
import ResumeSection from "./ResumeSection";
import { nanoid } from "nanoid";

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      resumeSections: [
        {
          id: nanoid(),
          header: 'Personal Information',
          inputs: [
            'First Name',
            'Last Name',
            'Address Line 1',
            'Address Line 2',
            'State',
            'Country',
            'Post Code',
            'Email',
            'Phone'
          ]
        },
        {
          id: nanoid(),
          header: 'Summary',
          inputs: [
            'About You'
          ]
        },
        {
          id: nanoid(),
          header: 'Professional Experience',
          inputs: [
            'Position title',
            'Place of employment',
            'Location',
            'Dates worked',
            'Key points',
            'Key points',
            'Key points'
          ]
        },
        {
          id: nanoid(),
          header: 'Education',
          inputs: [
            'Qualification/Certificate',
            'Place of education',
            'Location',
            'Graduation date',
            'Key points',
          ]
        },
        {
          id: nanoid(),
          header: 'Interests',
          inputs: [
            'Interest',
            'Interest',
            'Interest',
            'Interest'
          ]
        }
      ]
    };
  }

  render() {
    return (
      <main className="main">
        {this.state.resumeSections.map((section, i) => (<ResumeSection key={section.id} title={section.header} />))}
      </main>
    );
  }
};

export default Main;
