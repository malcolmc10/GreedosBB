import React, { Component } from 'react'
import Show from './Show';
import axios from 'axios'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      nowBounty: null,
      initialState: "",
      // currentText: "",
      name: "",

    };
  }

  searchBounty = async () => {
    const nowBounty = await axios.get(`https://swapi.dev/api/people/`);
    this.setState({
      nowBounty: nowBounty.data.name,

    });
  }

  // changeText(currentText) {
  //   this.setState({ currentText });
  // }

  comnponentDidMount = async () => {
    this.searchBounty();
  }
  
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

