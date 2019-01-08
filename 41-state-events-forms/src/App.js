import React, { Component } from 'react';
import data from './paintings-data';

import Navbar from './Navbar'
import PaintingForm from './PaintingForm'
import PaintingsList from './PaintingsList'

class App extends Component {
  constructor () {
    super()

    this.state = {
      paintings: data
    }
  }

  addNewPainting = (paintingData) => {
    let newPaintings = [
      paintingData,
      ...this.state.paintings
    ]
    this.setState({paintings: newPaintings})
  }

  render() {
    return <div>
      <Navbar title='Paintr' subtitle="Collect them all!"/>
      <PaintingForm handleAddNewPainting={this.addNewPainting}/>
      <PaintingsList paintings={this.state.paintings} />
    </div>
  }
}

export default App;


// React.createElement(PaintingsList, {paintings: data}, null)
