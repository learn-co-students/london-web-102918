import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {

  state={
    front: true
  }

  findHpOfPokemon = () => {
    return this.props.pokemon.stats.find(stat => stat.name === "hp").value;
  };

  handleClick = () => {
    this.setState({front: !this.state.front})
  }

  render() {
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img alt="oh no!" src={this.state.front ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.findHpOfPokemon()}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
