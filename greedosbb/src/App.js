import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import People from './People';
import Header from './Header';
import {Route} from 'react-router-dom';

export default class App extends Component {
  state = {
    people: [] 
  }
  
  componentDidMount = async () => {
    const response = await axios.get('https://swapi.dev/api/people/')
        // console.log(response)  
  this.setState({
      people: response.data.results
    })
  }
  
  
  
  render() {
    return (
      <div className="app">
        <Header />
        <People pArray={this.state.people} />
      </div>
    )
  }
}

  
  
  
  
    









  




