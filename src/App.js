
import './App.css';
import Counter from './components/Counter';

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>MEMORY</h1>
        <Counter />
      </div>
      
    );
  }
}

export default App;
