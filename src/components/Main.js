import React, { Component } from "react";
import ResumeSection from "./ResumeSection";

class Main extends Component {
  render() {
    return (
      <main className="main">
        <ResumeSection title="Summary" />
        <ResumeSection title="Experience" />
        <ResumeSection title="Education" />
        <ResumeSection title="Key Skills" />
        <ResumeSection title="Interests" />
      </main>
    );
  }
};

export default Main;
