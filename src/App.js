import onePiece from './one-piece.json'
import './App.css';
import Counter from './components/Counter';
import Victory from './components/Victory';

import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()

    this.state = {
        counterPlayer : 0,
        counterComputer : 0
    }
    this.handleCounterPlayer = this.handleCounterPlayer.bind(this)
    this.handleCounterComputer = this.handleCounterComputer.bind(this)
  }

  handleCounterPlayer () {
    // if player win
    this.setState ({ counterPlayer : this.state.counterPlayer + 1})
}

handleCounterComputer () {
    // if computer win
    this.setState ({ counterComputer : this.state.counterComputer + 1})
}


  render() {
    const {counterPlayer, counterComputer} = this.state
    const result = counterPlayer + counterComputer < 3
    
    return (
      <>
        { result ? (
            <>
              <h1> MEMORY </h1>
              <Counter counterPlayer={counterPlayer} counterComputer={counterComputer}/>
            </>
          ) : (
            <Victory counterPlayer={counterPlayer} counterComputer={counterComputer} />
          )
        }
        

      </>
      
    );
  }
}

export default App;
