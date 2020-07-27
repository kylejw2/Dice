import React from 'react';
import './App.css';

function RandomNum(props) {

    function calcRandomNum() {
        return Math.ceil(Math.random() * props.value);
    }

    return <h3>Your random number: {calcRandomNum()}</h3>
}

export default RandomNum;