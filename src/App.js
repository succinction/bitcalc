import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calc from './components/Calc'

class App extends Component {

  constructor(props) {
    super(props)
		document.onselectstart = function(){ return false; };
		document.body.setAttribute('unselectable', 'on', 0);
    this.state = {
      bits_num: 20
    }

  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>BIT CALCULATOR</h2>
        </div>
        <Calc number_of_bits={this.state.bits_num}  />

      </div>
    );
  }
}

export default App;
