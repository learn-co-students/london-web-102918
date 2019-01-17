import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    counter:0,
    eaten:[],
    budget: 40
  }

  eatSushi = (sushi) => {
    this.state.eaten.includes(sushi) || this.state.budget < sushi.price?
    null:
    this.setState({
      eaten: [...this.state.eaten, sushi],
      budget: this.state.budget - sushi.price
    })
  }



  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({sushis: sushis}))
  }

  nextFour = () => {
    return this.state.sushis.slice(this.state.counter, this.state.counter + 4)
  }

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 4
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer eaten={this.state.eaten} eatSushi={this.eatSushi} incrementCounter={this.incrementCounter} sushis={this.nextFour()}/>
        <Table budget={this.state.budget} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;
