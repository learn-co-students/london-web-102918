import React, { Component } from 'react';

import SinglePokemon from './SinglePokemon'

const PokeList = (props) => {
  return (
    <ul>
      {props.allPokemons.map(singlePokemon => <SinglePokemon key={singlePokemon.id} pokemon={singlePokemon} />)}
    </ul>
  );
}

export default PokeList;
