import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

export default class App extends Component {
  state = {
    people: [] 
  }
  
  componentDIdMount = () => {
    const response = await.get('https://swapi.dev/api/people')
    console.log()
  }
  
  
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

  
  
  
  
    









  




