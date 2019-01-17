import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search, Dropdown } from "semantic-ui-react";

import _ from "lodash";
const URL = "http://localhost:3000/pokemon";

class PokemonPage extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      searchTerm: "",
      abilities: [],
      currentAbility: ""
    };
  }


  addPokemon = (pokemon) => {
    this.setState({
      pokemon: [...this.state.pokemon, pokemon]
    })
  }

  componentDidMount() {
    this.fetchPokemon();
  }

  fetchPokemon = () => {
    fetch(URL)
      .then(res => res.json())
      .then(pokemonCollection =>
        this.setState({
          pokemon: pokemonCollection
        }, this.getAbilities)
      );
  };

  getAbilities = () => {
    let abilities = []
    this.state.pokemon.forEach(p => {
      console.log("p", p)
      if (p.abilities){
        p.abilities.forEach(pa => {
          if(!abilities.includes(pa)){
            abilities.push(pa)
          }
        })
      }
    })
    abilities = abilities.map(a => {
      return {value: a, text: a}
    })
    this.setState({
      abilities: abilities
    })
  }

  filterPokemons = () => {
    let filtered = this.state.pokemon.filter(p => p.name.includes(this.state.searchTerm))
    if(this.state.currentAbility) {
      filtered = filtered.filter(p => {
        if(p.abilities){
         return p.abilities.includes(this.state.currentAbility)
       }
      })
    }
    return filtered
  }



  render() {
    console.log("this is the state of pokemon", this.state.pokemon);
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search
          onSearchChange={_.debounce((event, data) => this.setState({searchTerm: data.value}), 500)}
          showNoResults={false}
        />
         <Dropdown onChange={(event,data)=> this.setState({currentAbility:data.value})} placeholder='Select Country' fluid search selection options={this.state.abilities} />
        <br />
        <PokemonCollection pokemon={this.filterPokemons()} />
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
      </div>
    );
  }
}

export default PokemonPage;
