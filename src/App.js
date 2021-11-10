
import React, { Component } from 'react';
import onePiece from './one-piece.json'
import Card from './components/Card';
import Restart from './components/Restart'
import Counter from './components/Counter';
import Victory from './components/Victory';
import Rules from './components/Rules';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {

  constructor () {
    super()

    // initial state data
    this.state = {
      showPopup: false,
      counterPlayer: 0,
      counterComputer: 0
    };

    // bindings
    this.togglePopupRules = this.togglePopupRules.bind(this);
    this.handleCounterPlayer = this.handleCounterPlayer.bind(this);
    this.handleCounterComputer = this.handleCounterComputer.bind(this);
  }

  // method rules popup
  togglePopupRules() {
    this.setState({ showPopup: !this.state.showPopup });
  }

  handleCounterPlayer() {
    // if player win
    this.setState({ counterPlayer: this.state.counterPlayer + 1 })
  }

  handleCounterComputer() {
    // if computer win
    this.setState({ counterComputer: this.state.counterComputer + 1 })
  }

  

  render() {
    const { counterPlayer, counterComputer } = this.state
    const result = counterPlayer + counterComputer < 21

    const cards = [...onePiece, ...onePiece]

    return (

      <>
        <button
          onClick={this.togglePopupRules}
          type="button"
          className="btn btn-primary my-5 mx-5">
            Règles du jeu
        </button>


        { this.state.showPopup && <Rules onClick={this.togglePopupRules.bind()} /> }
      
        { result ? (
            <>
              <h1>MEMORY GAME</h1>
              <Counter counterPlayer={counterPlayer} counterComputer={counterComputer} />
              <Restart/>
              <div className="container">
                <div className="row">
                  {cards.map(character => (
                    <Card 
                      name= {character.name}
                      image= {character.imageRecto}
                      randomRotate= {Math.floor(Math.random() * (20 - (-20) + 1) + (-20))}
                    />
                  ))}
                </div>
              </div>
          </>
        ) : (
          <Victory counterPlayer={counterPlayer} counterComputer={counterComputer} />
        )

        }

      </>
    )
  }
}


export default App;