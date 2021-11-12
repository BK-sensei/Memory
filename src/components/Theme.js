import React, { Component } from 'react';
import '../theme-style.css'

class Theme extends Component {
    render() {
        return (
            <>
                <select onChange={this.props.onClick} className="form-select">
                    <option value="onePiece">One Piece</option>
                    <option value="lotr">Lord of The Rings</option>
                    <option value="minions">Minions</option>
                </select>
            </>
        );
    }
}

export default Theme;