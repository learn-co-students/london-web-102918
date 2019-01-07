import React, { Component } from 'react';
import data from './paintings-data';

import PaintingsList from './PaintingsList'

class App extends Component {
  render() {
    return (
      <PaintingsList paintings={data} />
    );
  }
}

export default App;


// React.createElement(PaintingsList, {paintings: data}, null)
