import React, { Component } from 'react';
import './App.css';
import Weather from './Weather';
import PwnedAccounts from './PwnedAccounts';
import Robohash from './Robohash';
import Newton from './Newton';

class App extends Component {
  render() {
    return (
      <div>
        <div className="app-div">
          <p className="app-text" />
        </div>
        <Robohash />
        <Weather />
        <PwnedAccounts />
        <Newton />
      </div>
    );
  }
}

export default App;
