import React, { Component } from 'react';
import './App.css';
import Weather from './Weather';
import Robohash from './Robohash';
import Newton from './Newton';

class App extends Component {
  render() {
    return (
      <div>
        GO NIMBLY CHALLENGE
        <Robohash />
        <Weather />
        <Newton />
      </div>
    );
  }
}

export default App;
