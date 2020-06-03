import React, { Component } from 'react';




export default class Counter extends Component {
    constructor() {
        super();
        this.state = {

            number: 1
        }
    }
    randomNumber = () => {
        const randomNumber = Math.floor(Math.random() * 100000000000000) + 1;
        this.setState({
            number: randomNumber
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.number}</p>
            </div>
        );
    }
}


// received help from stack overflow.