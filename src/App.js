
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

    // Initial State
    this.state = {
      showPopup: false,
      counterPlayer: 0,
      counterComputer: 0,
      firstCard: null,
      secondCard: null,
      cards: [...onePiece, ...onePiece],
      cardsClicked: [],
      //--- theme: "onePiece"
    };

    // Binding des méthodes
    this.togglePopupRules = this.togglePopupRules.bind(this);
    this.handleCounterPlayer = this.handleCounterPlayer.bind(this);
    this.handleCounterComputer = this.handleCounterComputer.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this)

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
      this.setState({ firstCard: { ...cards[index], index: index } })
    } else if (!secondCard) {
      this.setState({ secondCard: { ...cards[index], index: index } })
    }
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
      this.iA()
    }
  }

  // Fonction pour que l'ordinateur puisse jouer
  iA() {
    // Je génère deux chiffres aléatoires qui vont correspondre aux index des cartes
    let min = 0;
    let max = this.state.cards.length - 1;

    let index1 = Math.floor(Math.random() * (max - min + 1) + min);
    let index2 = Math.floor(Math.random() * (max - min + 1) + min);
    console.log('message card1', index1);
    console.log('message card2', index2);

    // 2 J'utilise mes deux index pour récupérer les deux cartes dans le tableau de cards
    // créer deux variables chaque variables vont représenter un index de cards
    const card1 = this.state.cards[index1];
    console.log('card1', card1);

    const card2 = this.state.cards[index2];
    console.log('card1', card2);

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

    // je renisialise les state a null // INUTILE POUR CETTE ACTION
    // l'ia continue a jouer
    // sinon c'est le tour de sevrain
    // je renisialise les sate a null
  }

  // Fonction qui compare les deux cartes retournées
  // Si les cartes sont identiques alors je continue à jouer
  // sinon c'est le tour de l'Ia


  render() {
    const { counterPlayer, counterComputer, cards, cardsClicked } = this.state
    const result = counterPlayer + counterComputer < 12
    return (
      <>
        {result ? (
          <>
            <header className="d-flex justify-content-between align-items-center ms-5">
              <Restart />
              <h1> MEMORY GAME</h1>
              <button
                onClick={this.togglePopupRules}
                type="button"
                className="btn btn-primary btn-lg" data-toggle="modal">
                Règles du jeu
              </button>
              {this.state.showPopup && <Rules onClick={this.togglePopupRules} />}
            </header>
            <Counter counterPlayer={counterPlayer} counterComputer={counterComputer} />
            <div className="container">
              <div className="row">
                {cards.map((card, index, item) => {
                  if (cardsClicked.some((e) => e.name === card.name)) {
                    return <div key={item} className="container-op col-1">

                    </div>
                  }
                  return <Card
                    name={card.name}
                    image={card.imageRecto}
                    randomRotate={Math.floor(Math.random() * (20 - (-20) + 1) + (-20))}
                    onClick={() => this.handleCardClick(index)}
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
    )
  }
}


export default App;