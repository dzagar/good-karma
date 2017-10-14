import React, { Component } from 'react';
import './App.css';
import { LogKarma } from "./LogKarma";
import { NavBar } from "./NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <LogKarma/>
      </div>
    );
  }
}

export default App;
