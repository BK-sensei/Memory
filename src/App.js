
import onePiece from './one-piece.json'
import './App.css';
import Card from './components/Card';
import "bootstrap/dist/css/bootstrap.min.css"
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
      showPopup: false,
      counterPlayer : 0,
      counterComputer : 0,
      firstCard: null,
      secondCard: null,
      cards : [...onePiece, ...onePiece],
      isFlipped : false
    };

    // bindings
    this.togglePopupRules = this.togglePopupRules.bind(this);
    this.handleCounterPlayer = this.handleCounterPlayer.bind(this);
    this.handleCounterComputer = this.handleCounterComputer.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this)
    // this.handleCompareCards = this.handleCompareCards.bind(this)
  }

  // method rules popup
  togglePopupRules() {
    this.setState({ showPopup: !this.state.showPopup });
  }

  handleCounterPlayer () {
    // if player win
    this.setState ({ counterPlayer : this.state.counterPlayer + 1})
  }

  handleCounterComputer () {
    // if computer win
    this.setState ({ counterComputer : this.state.counterComputer + 1})
  }

  handleCardClick(index) {
    const {firstCard, secondCard, cards} = this.state
    if (!firstCard) {
      this.setState ({firstCard : cards[index], isFlipped : true })
    } else if (!secondCard) {
      this.setState ({secondCard : cards[index], isFlipped : true })
    } if (firstCard.name !== secondCard.name && firstCard !== null && secondCard !== null) {
      this.setState ({isFlipped : false})
  }
} 
    


  render() {
    const {counterPlayer, counterComputer, cards} = this.state
    const result = counterPlayer + counterComputer < 21
    // const shuffledCards = cards.sort((a,b) => 0.5 - Math.random())
    
    return (

      <>
      
        { result ? (
            <>
              <h1> MEMORY GAME</h1>
              <Counter counterPlayer={counterPlayer} counterComputer={counterComputer}/>
              <Restart/>
              <div className="container">
                <div className="row">
                  {cards.map((character, index) => (
                    <Card 
                      name= {character.name}
                      image= {character.imageRecto}
                      randomRotate= {Math.floor(Math.random() * (20 - (-20) + 1) + (-20))}
                      onClick= {() => this.handleCardClick(index)}
                      isFlipped={(this.state.firstCard && character.name === this.state.firstCard.name) 
                        || (this.state.secondCard && character.name === this.state.secondCard.name)
                      }
                    />
                  ))}
                </div>
              </div>
          
              <button
                onClick={this.togglePopupRules.bind(this)}
                type="button"
                className="btn btn-primary">Règles du jeu
              </button>

              {this.state.showPopup ? (
                <Rules
                closePopup={this.togglePopupRules.bind(this)} />
              )
              : ("")
              }
          
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
