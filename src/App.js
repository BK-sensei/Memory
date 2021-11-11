
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
      cardsClicked : [],
      // theme: "onePiece"
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
      // Appeler la fonction IA
      this.iA()
    }
  }

  // handleSelectChange(e) {
  //   const value = e.target.value

  //   if (value === "onePiece") {
  //     this.setState({
  //       theme: value,
  //       cards: [...onePiece, ...onePiece]
  //     })
  //   } else if (value === "lotr") {
  //     this.setState({
  //       theme: value,
  //       cards: [...lotr, ...lotr]
  //     })
  //   }
  // }
    
     // 4 je compare mes deux cartes qui sont stoker dans le state 
      if(card1.name === card2.name) {
        this.handleCounterComputer()
        this.iA();
      } else {
        this.handleCardClick()
      }

    // Si les cartes sont identique 
    // j'incrimente le conteur de l'ia
    // je renisialise les state a null // INUTILE POUR CETTE ACTION
    // l'ia continue a jouer
    // sinon c'est le tour de sevrain
    // je renisialise les sate a null
  }

  // Fonction qui compare les deux cartes retournées
  // Si les cartes sont identique je continue a jouer
  // sinon c'est le tour de l'Ia
    

  render() {
    const {counterPlayer, counterComputer, cards, cardsClicked} = this.state
    const result = counterPlayer + counterComputer < 21
    
    return (

      <>
        
        { result ? (
            <>
              {/* select onchange */}
              <h1> MEMORY GAME</h1>
              <Counter counterPlayer={counterPlayer} counterComputer={counterComputer}/>
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
