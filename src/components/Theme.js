import React, { Component } from 'react';
import '../theme-style.css'

class Theme extends Component {
    render() {
        return (
            <>
                <select onChange={this.props.onClick} className="form-select">
                    <option onSelect={this.props.onChange} value="onePiece">One Piece</option>
                    <option onSelect={this.props.onChange} value="lotr">Lord of The Rings</option>
                    <option onSelect={this.props.onChange} value="minions">Minions</option>
                </select>
            </>
        );
    }
}

export default Theme;