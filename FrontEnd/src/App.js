import React, { Component } from 'react';
import './App.css';
import { LogKarma } from "./LogKarma";
import { FindHowToHelp } from "./FindHowToHelp";
import { NavBar } from "./NavBar";
import { FindNonProfit } from "./FindNonProfit";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      <LogKarma/>
      <FindHowToHelp/>
      <FindNonProfit/>
      </div>
    );
  }
}

export default App;
