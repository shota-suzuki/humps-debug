import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import humps from "humps"

class App extends Component {
  render() {
    const debugData = {
      "aaaBbb": "cccDdd"
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <pre>{JSON.stringify(debugData)}</pre>
        <pre>{JSON.stringify(humps.decamelizeKeys(debugData))}</pre>

      </div>
    );
  }
}

export default App;
