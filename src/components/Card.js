import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div>
                <div className = "front-card">
                    <img src="" alt="" /> 
                    <p> ... </p>   
                </div>
                <img className="back-card" src="" alt="" />
            </div>
        );
    }
}

export default Card;