import React from 'react';
import './App.css';

function Dice() {
  return (
    <form>
        <input type="number" placeholder="Number of sides"></input>
        <button type="submit">Add Dice</button>
    </form>
  );
}

export default Dice;