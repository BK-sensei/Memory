import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super()

        this.state = {
            counterPlayer : 0,
            counterComputer : 0
        }
        this.handleCounterPlayer = this.handleCounterPlayer.bind(this)
        this.handleCounterComputer = this.handleCounterComputer.bind(this)
    }
 
    handleCounterPlayer () {
        // if player win
        this.setState ({ counterPlayer : this.state.counterPlayer + 1})
    }

    handleCounterComputer () {
        // if computer win
        this.setState ({ counterComputer : this.state.counterComputer + 1})
    }

    render() {
        const {counterPlayer, counterComputer} = this.state
        return (
            <div className="counter">
                <div className="counterMargin"> Player <span className="marginScorePlayer"> {counterPlayer} </span></div>
                <div className="counterMargin"> | </div>
                <div className="counterMargin"> <span className="marginScoreComputer"> {counterComputer} </span> Computer </div>
            </div>
        );
    }
}

export default Counter;