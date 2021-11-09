
import onePiece from './one-piece.json'
import './App.css';
import Restart from './components/Restart'
import Counter from './components/Counter';
import Victory from './components/Victory';

import React, { Component } from 'react';
import Rules from './components/Rules';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor () {
    super()

    // initial state data
    this.state = {
      showPopup: false
    };

    // bindings
    this.togglePopupRules = this.togglePopupRules.bind(this);
  }

  // method rules popup
  togglePopupRules() {
    this.setState({ showPopup: !this.state.showPopup });
  }

  

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
    const result = counterPlayer + counterComputer < 21
    
    return (

      <div>
        <button

          onClick={this.togglePopupRules.bind(this)}
          type="button"
          className="btn btn-primary">Règles du jeu</button>

        {this.state.showPopup ?

          <Rules
            closePopup={this.togglePopupRules.bind(this)} />
          : null
        }
      </div>

      <>
      
        { result ? (
            <>
              <h1> MEMORY </h1>
              <Counter counterPlayer={counterPlayer} counterComputer={counterComputer}/>
              <Restart/>
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
