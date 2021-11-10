import React, { Component } from 'react';
import '../App.css';

class Rules extends Component {
    render() {
        return (
            <div className="box">
                <h1>REGLES DU ONE PIECE MEMORY</h1>
                <p>Choisissez une carte sur laquelle vous allez cliquer.</p>
                <p>
                    Mémorisez le personnage de la carte sélectionnée et si l'autre carte correspond à la précédente
                    vous gagnez un point. Si vous ne trouvez pas le personnage alors ce sera au tour de l'adversaire de jouer et vice-versa.
                </p>
                <p>La partie sera terminée lorsque toutes les cartes auront été trouvées en doubles.</p>
                <p>Le joueur ayant trouvé le plus de doublons sera le vainqueur de la partie.</p>

                <button onClick={this.props.onClick} type="button" className="btn btn-danger my-4 py-2">Fermer</button>
            </div>
        );
    }
}

export default Rules;