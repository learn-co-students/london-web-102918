import React, { Component } from 'react';
import data from './paintings-data';

import Navbar from './Navbar'
import PaintingForm from './PaintingForm'
import PaintingsList from './PaintingsList'
import PaintingDetails from './PaintingDetails'

<<<<<<< HEAD
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
=======
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  state = {
    paintings: data,
>>>>>>> 0336cd0e8998d1bba671b4ca05dcab9e767853a7
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
<<<<<<< HEAD
  
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
=======

    return <div>
      <Navbar title='Paintr' subtitle="Collect them all!"/>
      <Switch>
        <Route
          path='/'
          exact
          component={() => [<h1> Home </h1>, <p>Try clicking on the logo above, or navigating to /paintings</p>]}
        />
        <Route
          path='/paintings'
          exact
          component={() =>
            <PaintingsList
              paintings={this.state.paintings}
            />}
        />
        <Route path='/paintings/:id' component={(routerProps) => {
          // find the right painting details
          const id = routerProps.match.params.id
          const selectedPainting = this.state.paintings.find(painting => painting.id == id)
          return <PaintingDetails
            selectedPainting={selectedPainting}
          />}}
          />
        <Route
          path='/add'
          component={() =><PaintingForm handleAddNewPainting={this.addNewPainting} />}
        />

        <Route
          component={() => <h1> Page not found </h1>}
        />
      </Switch>
>>>>>>> 0336cd0e8998d1bba671b4ca05dcab9e767853a7
    </div>
  }
}

export default App;
<<<<<<< HEAD

// React.createElement(PaintingsList, {paintings: data}, null)
=======
>>>>>>> 0336cd0e8998d1bba671b4ca05dcab9e767853a7
