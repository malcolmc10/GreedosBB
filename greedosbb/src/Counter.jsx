import React, { Component } from 'react';




export default class Counter extends Component {
    constructor() {
        super();
        this.state = {

            number: 1
        }
    }
    componentDidMount = () => {
        const randomNumber = Math.floor(Math.random() * 100000000000000) + 100;
        this.setState({
            number: randomNumber
        })
    }
    render() {
        return (
            <>
                <p>{this.state.number}</p>
            </>
        );
    }
}


// received help from stack overflow.