import React, { Component } from 'react';
import './App.css';

// const API = '/api/getAllEmployees';
// const DEFAULT_QUERY = 'redux';
// const API = 'https://swapi.co/api/people/1';
const API = 'http://localhost:8080/api/getAllEmployees';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(data => {
        console.log(data)
        this.setState({ hits: data })
      });
  }

  render() {
    const { hits } = this.state;

    return (
      <ul>
        {/* {hits.map(hit => */}
          {/* <li key={hits.birth_year}>
            <a href={hits.homeworld}>{hits.name}</a> */}
          <li key={hits.id}>
            {hits.firstName}

          </li>
        {/* )} */}
      </ul>
    );
  }
}

export default App;
