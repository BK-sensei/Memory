
import React, { Component } from 'react';
import onePiece from './one-piece.json'

import minions from './minions.json'
import lotr from './lotr.json'

import './App.css';

import Card from './components/Card';
import Restart from './components/Restart';
import Counter from './components/Counter';
import Victory from './components/Victory';
import Theme from './components/Theme';

import React, { Component } from 'react';
import Rules from './components/Rules';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {

  constructor () {
    super()

    // Initial State
    this.state = {
      // myTurn: false,
      showPopup: false,
      counterPlayer: 0,
      counterComputer: 0,
      firstCard: null,
      secondCard: null,
      cards: [...onePiece, ...onePiece],
      cardsClicked: [],

    };

    // Binding des méthodes
    this.togglePopupRules = this.togglePopupRules.bind(this);
    this.handleCounterPlayer = this.handleCounterPlayer.bind(this);
    this.handleCounterComputer = this.handleCounterComputer.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)

    // Shuffle = mélange les cartes
    // const shuffledCards = this.state.cards.sort((a, b) => 0.5 - Math.random());
  }

  // Définit un ordre des fonctions
  componentDidUpdate(prevProps, prevState) {
    if (!prevState.secondCard && this.state.secondCard) {
      this.compare()
    }
  }

  // Fonctions Rules Pop Up
  togglePopupRules() {
    this.setState({ showPopup: !this.state.showPopup });
  }

  // Fonction qui compte les points du Joueur
  handleCounterPlayer() {
    this.setState({ counterPlayer: this.state.counterPlayer + 1 })
  }

  // Fonction qui compte les points de l'ordinateur
  handleCounterComputer() {
    // if computer win
    this.setState({ counterComputer: this.state.counterComputer + 1 })
  }

  // Fonction qui retourne deux cartes à l'aide d'un click
  handleCardClick(index) {
    const { firstCard, secondCard, cards } = this.state
    if (!firstCard) {
      this.setState({ firstCard: { ...cards[index], index: index }, isDisable: true })
    } else if (!secondCard) {
      this.setState({ secondCard: { ...cards[index], index: index }, isDisable: true })
    }
    this.setState({
      disabled: true,
    });
  }

  // Fonction qui compare les deux cartes retournées
  compare() {
    if (this.state.firstCard.name === this.state.secondCard.name) {
      const newArray = [...this.state.cardsClicked]
      if (!newArray.some((e) => e.name === this.state.firstCard.name)) {
        newArray.push(this.state.firstCard)
      }
      setTimeout(() => {
        this.setState({
          firstCard: null,
          secondCard: null,
          cardsClicked: newArray
        })
      }, 2000)
      this.handleCounterPlayer()
    } else {
      setTimeout(() => {
        this.setState({
          firstCard: null,
          secondCard: null
        })
      }, 2000)
      // Appeler la fonction IA
      this.iA();
    }
  }

  // Fonction pour que l'ordinateur puisse jouer
  iA() {
    // Je génère deux chiffres aléatoires qui vont correspondre aux index des cartes
    let min = 0;
    let max = this.state.cards.length - 1;

    let index1 = Math.floor(Math.random() * (max - min + 1) + min);
    let index2 = Math.floor(Math.random() * (max - min + 1) + min);
    console.log('message card1 IA', index1);
    console.log('message card2 IA', index2);

    // 2 J'utilise mes deux index pour récupérer les deux cartes dans le tableau de cards
    // créer deux variables chaque variables vont représenter un index de cards
    const card1 = this.state.cards[index1];
    console.log('card1 IA', card1);
    const card2 = this.state.cards[index2];
    console.log('card2 IA', card2);

    // 3 je stocker mes deux variables dans mes states 
    // inutile de cette faire cette action de setState({}) ! car l'ia n'a pas cliquer sur une carte lors de ses choix

    // this.setState({ 
    //   firstCard: {
    //     ...card1, index: index1
    //   },
    //   secondCard: {
    //     ...card2, index: index2
    //   },
    //  })

    // 4 je compare mes deux cartes qui sont stoker dans le state 
    if (card1.name === card2.name) {
      // Si les cartes sont identiques alors j'incrémente le compteur de points de l'ia 
      this.handleCounterComputer();
      // l'Ia puet continuer de jouer
      this.iA();
    }

    // je reniTialise les state a null // INUTILE POUR CETTE ACTION
    // l'ia continue a jouer
    // sinon c'est le tour de sevrain
    // je renitialise les states a null
  }

  // Fonction qui compare les deux cartes retournées
  // Si les cartes sont identiques alors je continue à jouer
  // sinon c'est le tour de l'Ia



  handleSelectChange(e) {
    const value = e.target.value

    if (value === "onePiece") {
      this.setState({
        theme: value,
        cards: [...onePiece, ...onePiece]
      })
    } else if (value === "lotr") {
      this.setState({
        theme: value,
        cards: [...lotr, ...lotr]
      })
    } else if (value === "minions") {
      this.setState({
        theme: value,
        cards: [...minions, ...minions]
      })
    }
  }
    

  render() {
    const { counterPlayer, counterComputer, cards, cardsClicked } = this.state
    const result = counterPlayer + counterComputer < 12
    return (
      <>
        { result ? (

            <>
              <header className="d-flex justify-content-between align-items-center">
                <Restart/>
                <h1> MEMORY GAME</h1>
                <div className="d-flex align-items-center">
                  <Theme onClick={this.handleSelectChange}/>
                  <button
                    onClick={this.togglePopupRules}
                    type="button"
                    className="btn btn-primary">
                      Règles du jeu
                  </button>
                  { this.state.showPopup && <Rules onClick={this.togglePopupRules.bind()} /> }
                  </div>
              </header>

              <Counter counterPlayer={counterPlayer} counterComputer={counterComputer}/>
              <div className="container">
                <div className="row">
                {cards.map((card, index) => {
                    if (cardsClicked.some((e) => e.name === card.name)) {
                      return <div className="container-op col-1">

                      </div>
                    }

                    return <Card 
                      name= {card.name}
                      image= {card.imageRecto}
                      backCard= {card.back} 
                      randomRotate= {Math.floor(Math.random() * (20 - (-20) + 1) + (-20))}
                      onClick= {() => this.handleCardClick(index)}
                      isFlipped={(this.state.firstCard && index === this.state.firstCard.index) 
                        || (this.state.secondCard && index === this.state.secondCard.index)
                      }
                    />
                  })}
                </div>
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