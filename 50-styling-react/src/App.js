import React, { Component } from 'react';
import data from './paintings-data';

import Navbar from './Navbar'
import PaintingForm from './css-components/PaintingForm'
import PaintingsList from './css-components/PaintingsList'
import PaintingsListJS from './inline-styles-components/PaintingsListJS'
import PaintingsListStyled from './styled-components/PaintingsListStyled'
import PaintingDetails from './css-components/PaintingDetails'
import FormTest from './css-components/FormTest'

import { Route, Switch } from 'react-router-dom'

class App extends Component {
  state = {
    paintings: data,
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

        <Route path='/form' component={FormTest} />

        <Route path='/js' component={() => <PaintingsListJS paintings={this.state.paintings} />} />

        <Route path='/styled' component={() =><PaintingsListStyled  paintings={this.state.paintings} />} />

        <Route
          component={() => <h1> Page not found </h1>}
        />
      </Switch>
    </div>
  }
}

export default App;
