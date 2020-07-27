import React from 'react';
import './App.css';
import Dice from './dice';

export default class App extends React.Component {
  state = {
    number: 0,
    diceList: []
  };

  handleClick(dice) {
    // event.preventDefault();  // The default behavior needs to be prevented.
    const diceList = this.state.diceList.slice();
    diceList.push(dice);
    this.setState({diceList: diceList});
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to the Dice Game</h1>
        <h3>Your random number is: {this.state.number}</h3>
        <Dice onClick={(dice) => this.handleClick(dice)}/>
      </div>
    );
  }
}