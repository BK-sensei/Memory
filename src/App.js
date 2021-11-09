import onePiece from './one-piece.json'
import './App.css';
import Card from './components/Card';

import React, { Component } from 'react';

class App extends Component {

  render() {
    console.log(onePiece);
    return (
      <div>
        {onePiece.map(character => (
          <Card 
            name= {character.name}
            image= {character.imageRecto}
          />
        ))}
      </div>
    );
  }
}

export default App;
