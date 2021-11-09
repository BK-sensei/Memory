import React, { Component } from 'react';
import '../card-style.css'


class Card extends Component {
    constructor(){
        super()

        this.state = {
            isFlipped: false
        }

        this.handleCardClick = this.handleCardClick.bind(this)
    }

    handleCardClick(e){
        console.log("yoyo")
        this.setState({isFlipped: true})
    }

    render() {
        console.log(this.props)
        const {isFlipped} = this.state
        return (
            <div className="container-op col-2">
                <div className={`card-op d-flex ${isFlipped ? "is-flipped" : "" } `} style={{transform: `rotate3d(0, 0, 1, ${this.props.randomRotate}deg)`}} onClick={this.handleCardClick}>
                    <div className="recto">
                        <div className="card card-front flip">
                            <div style={{backgroundImage: `url('../op-image/${this.props.image}.png')`}} className="card-img-top characterCard" alt="One Piece Character"></div>
                            <div class="card-body">
                                <h3 className="card-title text-center fw-bold">{this.props.name}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="verso flip">
                        <div style={{backgroundImage: `url('../op-image/op-back.png')`}} className="card-img-top img-fluid card-back" alt="Back Card"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;


{/* <div className="flip-container" onClick="this.classList.toggle('hover');">
    <div className="flipper">
    <div className="front">
        <img src="../img-onepiece/op-back.png"/>
    </div>
    <div className="back">
        <img src={`../img-onepiece/${this.props.image}.png`}/>
        <h3 className="card-title text-center fw-bold">{this.props.name}</h3>
    </div> 
    </div>
</div> */}