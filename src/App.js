import React, { Component } from "react";
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
      <Main />
    </div>
    );
  };
}

export default App;
