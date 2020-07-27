import React from 'react';
import './App.css';

export default class Dice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maxNumber: 1
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({maxNumber: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onClick(this.state.maxNumber);
    }
  
    render() {
        return (
            <form>
                <input type="number" onChange={this.handleChange} value={this.state.maxNumber} min='1' placeholder="Number of sides" />
                <button type="submit" onClick={this.handleSubmit}>Add Dice</button>
            </form>
          );
    }
}

