
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

    // Initial State
    this.state = {
      showPopup: false,
      counterPlayer : 0,
      counterComputer : 0,
      firstCard: null,
      secondCard: null,
      cards : [...onePiece, ...onePiece],
      cardsClicked: [],
      //--- theme: "onePiece"
    };

    // Binding des méthodes
    this.togglePopupRules = this.togglePopupRules.bind(this);
    this.handleCounterPlayer = this.handleCounterPlayer.bind(this);
    this.handleCounterComputer = this.handleCounterComputer.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this)

    // Shuffle = mélange les cartes
    const shuffledCards = this.state.cards.sort((a,b) => 0.5 - Math.random())  
  }
  
  // Définit un ordre des fonctions
  componentDidUpdate (prevProps, prevState) {
    if (!prevState.secondCard && this.state.secondCard){
      this.compare()
    }
  }

  // Fonctions Rules Pop Up
  togglePopupRules() {
    this.setState({ showPopup: !this.state.showPopup });
  }

  // Fonction qui compte les points du Joueur
  handleCounterPlayer () {
    this.setState ({ counterPlayer : this.state.counterPlayer + 1})
  }

  // Fonction qui compte les points de l'ordinateur
  handleCounterComputer () {
    // if computer win
    this.setState ({ counterComputer : this.state.counterComputer + 1})
  }

  // Fonction qui retourne deux cartes à l'aide d'un click
  handleCardClick(index) {
    const {firstCard, secondCard, cards} = this.state
    if (!firstCard) {
      this.setState ({firstCard : {...cards[index], index : index}})
    } else if (!secondCard) {
      this.setState ({secondCard : {...cards[index], index : index}})
    }
  } 

  // Fonction qui compare les deux cartes retournées
  compare () {
    if (this.state.firstCard.name === this.state.secondCard.name){
      const newArray = [...this.state.cardsClicked]
      if (!newArray.some((e) => e.name === this.state.firstCard.name)) {
        newArray.push(this.state.firstCard)
      }
      
      setTimeout (()=> {
        this.setState ({
          firstCard : null,
          secondCard : null,
          cardsClicked : newArray
        })
      },2000)
      this.handleCounterPlayer ()
    } else {
      setTimeout (()=> {
        this.setState ({
          firstCard : null,
          secondCard : null
        })
      },2000)
    }
  } 
    

  render() {
    const {counterPlayer, counterComputer, cards, cardsClicked} = this.state
    const result = counterPlayer + counterComputer < 21
    return (

      <>
      
        { result ? (
            <>
              <h1> MEMORY GAME</h1>
              <Counter counterPlayer={counterPlayer} counterComputer={counterComputer}/>
              <Restart/>
              <div className="container">
                <div className="row">
                {cards.map((card, index) => {
                    if (cardsClicked.some((e) => e.name === card.name)) {
                      return <div className="container-op col-2">

                      </div>
                    }

                    return <Card 
                      name= {card.name}
                      image= {card.imageRecto}
                      randomRotate= {Math.floor(Math.random() * (20 - (-20) + 1) + (-20))}
                      onClick= {() => this.handleCardClick(index)}
                      isFlipped={(this.state.firstCard && index === this.state.firstCard.index) 
                        || (this.state.secondCard && index === this.state.secondCard.index)
                      }
                    />
                  })}
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
