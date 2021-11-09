import onePiece from './one-piece.json'
import './App.css';
import Counter from './components/Counter';

import React, { Component } from 'react';

class App extends Component {

  render() {
    console.log(onePiece);
    return (
      <div>
        <h1>MEMORY</h1>
        <Counter />
      </div>
      
    );
  }
}

export default App;
