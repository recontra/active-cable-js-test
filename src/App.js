import React, { Component } from 'react';
// import './App.css'; <-- commented out for styling
import Agenda from './components/Agenda';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Agenda />
      </div>
    );
  }
}

export default App;
