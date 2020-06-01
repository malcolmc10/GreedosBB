import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

export default class App extends Component {
  state = {
    people: [] 
  }
  
  componentDidMount = async () => {
    const response = await axios.get('https://swapi.dev/api/people/')
    console.log(response);
  }
  
  
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

  
  
  
  
    









  




