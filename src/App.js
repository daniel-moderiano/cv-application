import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import '../src/styles/reset.css';
import '../src/styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
      <header className="header">
        <h1 className="header__title">CV Generator</h1>
      </header>
      <Main>
      <div className="resume">
        <div className="header">
          <div className="personal">
            <h1 className="personal__name">John Doe</h1>
            <h2 className="personal__title">Lawyer</h2>
          </div>
          <div className="personal__info">
            <div className="personal__address-one">18 Trenton Stree</div>
            <div className="personal__address-two">Vale Drive, ACT, 5000</div>
            <div className="personal__phone"> 0444 448 884</div>
            <div className="personal__email">john.doe@outlook.com</div>
            <div className="personal__linkedin">https://johndoe.linkedin.com</div>
          </div>
        </div>
        
        <div className="summary">
          <h2 className="summary__title">Summary</h2>
          <p className="summary__text">Lawyer in New York City</p>
        </div>

        <div className="education">
          <h2 className="education__title">Education</h2>
          {/* <!-- Professional/education section can be abstracted to component to replicate as needed --> */}
          <div className="education__section">
            <div className="education__school">Harvard University</div>
            <div className="education__city">New York</div>
            <div className="education__degree">Bachelor of Law</div>
            <div className="education__start">From 2000</div>
            <div className="education__end">To 2004</div>
            <div className="education__desc"></div>
          </div>
        </div>
        <div className="professional">
          <h2 className="professional__title">Professional Experience</h2>
          {/* <!-- Professional/education section can be abstracted to component to replicate as needed --> */}
          <div className="professional__section">
            <div className="professional__company">Harvard University</div>
            <div className="professional__city">New York</div>
            <div className="professional__job">Bachelor of Law</div>
            <div className="professional__start">From 2000</div>
            <div className="professional__end">To 2004</div>
            <div className="professional__desc"></div>
          </div>
        </div>
      </div>
      </Main>
      <Sidebar />
    </div>
    );
  };
}

export default App;
