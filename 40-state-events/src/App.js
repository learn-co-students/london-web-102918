import React, { Component } from 'react';
import data from './paintings-data';

import Navbar from './Navbar'

import PaintingsList from './PaintingsList'

class App extends Component {
  render() {
    return <div>
      <Navbar title='Paintr' subtitle="Collect them all!"/>
      <PaintingsList paintings={data} />
    </div>
  }
}

export default App;


// React.createElement(PaintingsList, {paintings: data}, null)
