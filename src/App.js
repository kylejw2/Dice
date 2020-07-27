import React from 'react';
import './App.css';
import Dice from './dice';
import RandomNum from './randomNum'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMax: null,
      diceList: []
    };
  }
  

  handleAddDiceClick(dice) {
    const diceList = this.state.diceList.slice();
    diceList.push(dice);
    this.setState({
      diceList: diceList,
      currentMax: dice
    }, () => console.log(this.state.diceList));
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to the Dice Game</h1>
        <RandomNum value={this.state.currentMax} />
        <Dice onClick={(dice) => this.handleAddDiceClick(dice)}/>
        <ul>
          {this.state.diceList.map((dice, index) => <li key={index}>{dice}</li>)}
        </ul>
      </div>
    );
  }
}