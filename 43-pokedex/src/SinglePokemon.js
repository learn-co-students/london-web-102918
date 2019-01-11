import React, { Component } from 'react';

const SinglePokemon = (props) => {
  return (
    <div>
      <img src={props.pokemon.image} />
      <h2>{props.pokemon.name}</h2>
    </div>
  );
}

export default SinglePokemon;
