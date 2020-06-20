import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons, handleButtonClick }) => {
  return (
    <>
      <div className="pokemons-container">
        { pokemons.map((pokemon) => (
          <PokemonCard key={ pokemon.id } pokemon={ pokemon }/>
        )) }
      </div>
      <div className="button-container">
        <button onClick={ handleButtonClick }>Load more pokémon</button>
      </div>
    </>        
  )
}

export default PokemonList;