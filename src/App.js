import React, { Component } from 'react';
import './App.css';
import logo from './images/pcf-logo.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fortune: {},
    };
  }

  componentDidMount() {
    this.getFortune();
  }

  getFortune = () => {
    fetch('https://fortune-teller-bot.cfapps.io/api/fortune/random')
      .then(response => response.json())
      .then((response) => { 
        this.setState({ fortune: response });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <img src={logo} className="App-logo" />

          <div className="Name">
            Ken Chen
          </div>

          <div className="Title">
            PCF Demo - Random Fortune Generator
          </div>
        </div>

        <div>
          <a className="Btn" onClick={this.getFortune}>
            Get New Fortune
          </a>
        </div>

        <div className="Author-container">
          { this.state.fortune.author } says...
        </div>
        
        <div className="Fortune-text">
          { this.state.fortune.text }
        </div>
        
      </div>
    );
  }
}

export default App;
