import onePiece from './one-piece.json'
import './App.css';
import Card from './components/Card';
import "bootstrap/dist/css/bootstrap.min.css"

import React, { Component } from 'react';

class App extends Component {

  render() {
    console.log(onePiece);
    return (
      <div>
        <h1>MEMORY GAME</h1>
        <div className="container">
          <div className="row">
            {onePiece.map(character => (
            <Card 
              name= {character.name}
              image= {character.imageRecto}
              randomRotate= {Math.floor(Math.random() * (20 - (-20) + 1) + (-20))}
            />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
