import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonCollection extends React.Component {
  renderPocketMonsters = () => {
    let mappedPokemon = this.props.pokemon;
    return mappedPokemon.map(pokemon => {
      return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
    });
  };

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.renderPocketMonsters()}
      </Card.Group>
    );
  }
}

export default PokemonCollection;
