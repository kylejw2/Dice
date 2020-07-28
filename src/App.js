import React from 'react';
import './App.css';
import Dice from './dice';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMax: null,
      diceList: [],
      randomNum: 0
    };
  }
  
  handleAddDiceClick(dice) {
    const diceList = this.state.diceList.slice();
    diceList.push(dice);
    this.setState({
      diceList: diceList,
      currentMax: dice
    });
  }

  calcRandomNum() {
    if (this.state.diceList.length > 0) {
      const randomNum = Math.ceil(Math.random() * this.state.currentMax);
      return randomNum;
    } else {
      return 0;
    }
  } 

  handleOldDiceClick(event) {
    this.setState({currentMax: event.target.textContent});
  }

  render() {
    const diceList = this.state.diceList.map((dice, index) => {
      return (<button
        key={index}
        onClick={(event) => this.handleOldDiceClick(event)}
      >{dice}</button>)});

    return (
      <div className="App">
        <h1>Welcome to the Dice Game</h1>
        <Dice onClick={(dice) => this.handleAddDiceClick(dice)}/>
        <h3>Your random number: {this.calcRandomNum()}</h3>
        <h4>Your dice: </h4>
        <ul>
          {diceList}
        </ul>
      </div>
    );
  }
}