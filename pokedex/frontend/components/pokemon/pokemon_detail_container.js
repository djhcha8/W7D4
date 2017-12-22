import { connect } from 'react-redux';
import {requestSinglePokemon} from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state) => {
  return {
    pokemon: state.entities.pokemon[state.ui.pokeDisplay]
  };
};

const mapDispatchToProps = (dispatch) => {
  // debugger
  return {
    requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
