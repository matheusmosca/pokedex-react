import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons, handleButtonClick }) => {
  return (
    <div>
      { pokemons.map((pokemon) => (
        <PokemonCard key={ pokemon.id } pokemon={ pokemon }/>
      )) }
      {/* <PokemonCard pokemon={ pokemons[0] } /> */}
      <button onClick={ handleButtonClick }>Pess</button>
    </div>
  )
}

export default PokemonList;