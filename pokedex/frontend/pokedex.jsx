import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import {requestAllPokemon} from './actions/pokemon_actions';
// import {selectAllPokemon} from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.s = store;
  // window.selectAllPokemon = selectAllPokemon;
  // store.dispatch(requestAllPokemon());
  ReactDom.render(<Root store = {store}/>, document.getElementById('root'));
});
