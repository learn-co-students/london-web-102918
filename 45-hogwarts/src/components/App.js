import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogTiles from './HogTiles';

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          < HogTiles hogs={hogs}/>
      </div>
    )
  }
}

export default App;
