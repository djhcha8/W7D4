export const selectAllPokemon = (state) => {
  return Object.keys(state.entities.pokemon).map((key) => (state.entities.pokemon[key]));
};
