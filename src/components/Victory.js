import React, { Component } from 'react';

class Victory extends Component {
    
    render() {
        const {counterPlayer, counterComputer} = this.props
        const result = counterPlayer > counterComputer
        return (

            <>
            {result ? (
                        <>
                            <div className="section"> 
                                <div className="sect"> 
                                    <h1> Vous avez gagné !!! </h1>
                                </div>
                            </div>
                            
                        </>
                        
                ) : 
                        <h1> Vous avez perdu !!!</h1>
            } 
                
            </>
        );
    }
}

export default Victory;