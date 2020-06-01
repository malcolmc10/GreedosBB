import React, { Component } from 'react';
import Axios from 'axios';
import {Route} from 'react-router-dom';
import Header from './Header.jsx';
import './App.css'

export default class App extends Component {
    state= {
      characters: [],
      showHeader: true,
      page: 1,
      background: '#fdffb6',
    }


      componentDidMount = async () => {
        this.getCharacters()
      }
      getCharacters = async () => {
        const response = await Axios.get(`http https://swapi.dev/api/people/1/`)
      };
  
  
      render() {
        return (
          <div className='Bounty' style={{backgroundColor: this.state.background}}>
            
            <button onClick={this.headerToggle}>Hide Header</button>
            
            
          </div>
        )
      }
    }
  
  
  
  
    









  




