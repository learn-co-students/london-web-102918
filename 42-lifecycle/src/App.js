import React, { Component } from 'react';
import './App.css';

// import LifeLogger from './components/LifeLogger'
// import AnalogClock from './components/AnalogClock'
import DigitalClock from './components/DigitalClock'
// import StockTicker from './components/StockTicker'
import RandomKoala from './components/RandomKoala'
// import WidgetSelector from './components/WidgetSelector'

class App extends Component {
  constructor(props){
    super(props)
    console.log(this.__proto__.constructor.name, "constructor")

    this.state = {
      koala: {},
      allKoalas: []
    }
  }
// var item = items[Math.floor(Math.random()*items.length)];
  componentDidMount () {
    fetch('http://localhost:3000/koalas')
      .then(res=> res.json())
      .then(data=> {
        const koala = data[Math.floor(Math.random()*data.length)];
        console.log(data, koala)
        this.setState({
          koala: koala,
          allKoalas: data
        })
      })
      console.log(this.__proto__.constructor.name, "mounting")
    }

    componentDidUpdate() {
        console.log(this.__proto__.constructor.name, "did update")
    }

  getNewKoala = (e) => {
    const { allKoalas } = this.state

    // const allKoalas = this.state.allKoalas

    const koala = allKoalas[Math.floor(Math.random()*allKoalas.length)];
    // const koala = this.state.allKoalas[Math.floor(Math.random()*this.state.allKoalas.length)];

    this.setState({koala: koala})
  }

  render() {
    return (
      <div>
        <DigitalClock />


        {/*
          <button onClick={this.getNewKoala}>New Koala</button>
          <RandomKoala koala={this.state.koala} />
        */}
      </div>
    );
  }
}

export default App;
