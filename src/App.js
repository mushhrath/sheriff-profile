import React, { Component } from 'react';
import './App.css';
import Profile from './Peronal/personal-info';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="bordered margin15 minHeight">
          <Profile />
        </div>
      </div>
    );
  }
}

export default App;
