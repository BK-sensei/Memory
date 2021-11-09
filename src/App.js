import './App.css';
import React, { Component } from 'react';
import Rules from './components/Rules';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor () {
    super()

    // initial state data
    this.state = {
      showPopup: false
    };

    // bindings
    this.togglePopupRules = this.togglePopupRules.bind(this);
  }

  // method rules popup
  togglePopupRules() {
    this.setState({ showPopup: !this.state.showPopup });
  }

  


  render() {
    return (
      <div>
        <button

          onClick={this.togglePopupRules.bind(this)}
          type="button"
          className="btn btn-primary">Règles du jeu</button>

        {this.state.showPopup ?

          <Rules
            closePopup={this.togglePopupRules.bind(this)} />
          : null
        }
      </div>
    );
  }
}

export default App;
