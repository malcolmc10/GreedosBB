import React, { Component } from 'react'
import Axios from 'axios'

export default class App extends Component {
    state= {


      characters: [],
      showHeader: true,
      page: 1,
      backgroundColor: 'black',
    }


      componentDidMount = async () => {
        this.getCharacters()
      }
      getCharacters = async () => {
        const response = await Axios.get(`http https://swapi.dev/api/people/1/`)
      }
  }









  render() {
    return (
      <div>
        
      </div>
    )
  }
}



