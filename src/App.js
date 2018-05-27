import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextComponent from './TextComponent';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {text: 'Type something!'};
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e){
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TextComponent text={this.state.text}/>
        </header>
        <input type="text" onChange={this.handleTextChange}/>
      </div>
    );
  }
}

export default App;
