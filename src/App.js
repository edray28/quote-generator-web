import React, { Component } from "react";
import Logo from "./components/Logo/Logo";
import Quotes from "./components/Quotes/Quotes";
import TSParticle from "./TSParticle";
import "tachyons";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Quotes />
        <TSParticle />
      </div>
    );
  }
}

export default App;
