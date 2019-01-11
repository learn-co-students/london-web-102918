import React, { Component } from 'react';
import './App.css';

import PokeList from './PokeList'
import PokeForm from './PokeForm'

class App extends Component {

  state = {
    allPokemons: []
  }

  componentDidMount () {
    fetch('//localhost:3000/pokemons')
    .then(res => res.json())
    .then(pokemonsData => {
      this.setState({
        allPokemons: pokemonsData
      })
    })
  }

  addNewPokemon = (newPokekmonObject) => {
    this.savePokemonToServer(newPokekmonObject)
    this.setState({
      allPokemons: [...this.state.allPokemons, newPokekmonObject]
    })
  }

  savePokemonToServer= (newPokekmonObject) => {
    fetch('//localhost:3000/pokemons', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newPokekmonObject)
    })
    .then(res => console.log('saved the pokemon'))
  }

  render() {
    return (
      <div className="App">
        <PokeForm onSubmitHandler={this.addNewPokemon}/>
        <PokeList allPokemons={this.state.allPokemons} />
      </div>
    );
  }
}

export default App;
