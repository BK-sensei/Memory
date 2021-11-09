import React, { Component } from 'react';

class Victory extends Component {
    
    render() {
        const {counterPlayer, counterComputer} = this.props
        const result = counterPlayer > counterComputer
        return (

            <>
            {result ? (
                        <h1> Vous avez gangé !!! </h1>
                ) : 
                        <h1> Vous avez perdu !!!</h1>
            } 
                
            </>
        );
    }
}

export default Victory;