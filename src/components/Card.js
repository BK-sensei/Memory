import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="col">
                <div className="card">
                    <div className="recto bg-primary">
                        <img/>
                    </div>
                    <div className="verso bg-danger">
                        <img src={this.props.image}/>
                        <h3 className="card-title text-center fw-bold">{this.props.name}</h3>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Card;