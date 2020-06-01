import React, { Component } from 'react';
import Axios from 'axios';
import {Route} from 'react-router-dom';
import Header from './Header.jsx';
import './App.css'
import Show from './Show'

export default class App extends Component {
    state= {
      people: [],
      showHeader: true,
      // page: 1,
      background: '#fdffb6',
    }


      componentDidMount = async () => {
        this.getPeople()
      }
      getPeople = async () => {
        const response = await Axios.get(`http https://swapi.dev/api/people/1/`)
      };
  
  
      render() {
        return (
          <div className='Bounty' style={{backgroundColor: this.state.background}}>
            
            <button onClick={this.headerToggle}>Header be Gone</button>
            <Route path='/' exact>
              
            </Route>
            
          </div>
        )
      }
    }
  
  
  
  
    









  




