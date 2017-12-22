import React from 'react';
import { Componenet } from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    // const pokemon = this.props.pokemon.map((pokemon, idx) => {
    //   return (
    //     <li key={idx}>
    //       {pokemon.name}
    //       <img src={pokemon.image_url} />
    //     </li>
    //   );
    // });

    const pokemonItems = this.props.pokemon.map(poke => {
      return(
        <PokemonIndexItem key={poke.id} pokemon={poke} />
      );
    });

    return (
      <div>
        <ul>
          {pokemonItems}
        </ul>
        <Route path="pokemon/:pokemonId" component={PokemonDetailContainer} />
      </div>
    );
  }

}

export default PokemonIndex;
