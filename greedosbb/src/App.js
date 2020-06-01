import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import People from './People';

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
        {this.state.people.map(person=>{
          <People />
        })}
      </div>
    )
  }
}

  
  
  
  
    









  




