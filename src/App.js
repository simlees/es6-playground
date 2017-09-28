import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import start from './es6/index';

class App extends Component {
  componentWillMount() {
    start();
  }
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
