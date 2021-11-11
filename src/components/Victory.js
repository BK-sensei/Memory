import React, { Component } from 'react';
import '../victory-style.css'

class Victory extends Component {
    
    render() {
        const {counterPlayer, counterComputer} = this.props
        const result = counterPlayer > counterComputer
        return (

            <>
            {result ? (
                        <div className="relative">
                            <div className="section"> 
                                <div className="sect"> 
                                    <h1> Vous avez gagné !!! </h1>
                                </div>
                            </div>
                            
                        </div>
                        
                ) : 
                    <div className="relative">
                        <div className="section1"> 
                            <div className="sect"> 
                                <h1> Vous avez perdu !!! </h1>
                            </div>
                        </div>
                        
                    </div>
            } 
                
            </>
        );
    }
}

export default Victory; 