import React, { Component } from 'react';
import data from './paintings-data';

import Navbar from './Navbar'
import PaintingForm from './PaintingForm'
import PaintingsList from './PaintingsList'
import PaintingDetails from './PaintingDetails'

class App extends Component {
  state = {
    paintings: data,
    selectedPainting: null
  }

  selectPainting = selectedPainting => {
    this.setState({ selectedPainting })
  }

  deselectPainting = () => {
    this.setState({ selectedPainting: null })
  }

  addNewPainting = (paintingData) => {
    let newPaintings = [
      paintingData,
      ...this.state.paintings
    ]
    this.setState({paintings: newPaintings})
  }

  render() {
    const { selectedPainting } = this.state
    const { selectPainting, deselectPainting } = this
  
    return <div>
      <Navbar title='Paintr' subtitle="Collect them all!"/>
      
      {
        selectedPainting
          ? <PaintingDetails selectedPainting={selectedPainting} deselectPainting={deselectPainting} />
          : [
            <PaintingForm handleAddNewPainting={this.addNewPainting}/>,
            <PaintingsList selectPainting={selectPainting} paintings={this.state.paintings} />
          ]
      }
    </div>
  }
}

export default App;

// React.createElement(PaintingsList, {paintings: data}, null)
