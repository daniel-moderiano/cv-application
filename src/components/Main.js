import React, { Component } from "react";
import ResumeSection from "./ResumeSection";

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      resumeSections: [
        'Summary',
        'Experience',
        'Education',
        'Key Skills',
        'Interests'
      ]
    };
  }

  render() {
    return (
      <main className="main">
        {this.state.resumeSections.map((section) => (<ResumeSection title={section} />))}
      </main>
    );
  }
};

export default Main;
