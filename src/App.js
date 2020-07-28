import React from 'react';
import './App.css';
import Dice from './dice';
// import RandomNum from './randomNum'

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
    }, () => console.log(this.state.diceList));
  }

  calcRandomNum() {
    if (this.state.diceList.length > 0) {
      return Math.ceil(Math.random() * this.state.diceList[this.state.diceList.length - 1]);
    } else {
      return 0;
    }
  } 

  handleOldDiceClick(event) {
    // event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to the Dice Game</h1>
        <Dice onClick={(dice) => this.handleAddDiceClick(dice)}/>
        <h3>Your random number: {this.calcRandomNum()}</h3>
        <h4>Your dice: </h4>
        <ul>
          {this.state.diceList.map((dice, index) => <button
            key={index}

          >{dice}</button>)}
        </ul>
      </div>
    );
  }
}