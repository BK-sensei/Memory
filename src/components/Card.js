import React, { Component } from 'react';


class Card extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="col-4">
                <div className="card">
                    <div className="recto bg-primary">
                        <img src="../img-onepiece/op-back.png" className="backCard"/>
                    </div>
                    <div className="verso">
                        <img src={`../img-onepiece/${this.props.image}.png`}/>
                        <h3 className="card-title text-center fw-bold">{this.props.name}</h3>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Card;