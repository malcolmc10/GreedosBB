import React, { Component } from 'react'
import Show from './Show';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      nowBounty: null,
      initialState: "",
      currentText: "",
      name: "",

    };
  }

  searchMovie = async () => {
    const nowBounty = await axios.get(`https://swapi.dev/api/people/`);
    this.setState({
      nowBounty: nowBounty.data.name,

    });
  }
  
  
  
  
  
  
  
  
  
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

