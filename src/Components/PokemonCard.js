import React from 'react';

const PokemonCard = ({ pokemon }) => {
  const { id, name, types, image } = pokemon;
  let pokemonNumber = `#${id}`;
  if (pokemonNumber.length === 2) {
    pokemonNumber = `#00${id}`
  } else if (pokemonNumber.length === 3){
    pokemonNumber = `#0${id}`
  }

  return (
    <div className="pokemon-card">
      <div className="pokemon-number-container">
        <div className="pokemon-number tag">{ pokemonNumber }</div>
      </div>
      <img src={ image } alt={ name }/>
      <div className="pokemon-name tag">{ name }</div>
      <div className="types-container">
        <span className={`pokemon-type tag ${types[0]}`}>{ types[0] }</span>
        { types.length > 1 && <span className={`pokemon-type tag ${types[1]}`}>{ types[1] }</span>}
      </div>
    </div>
  )
}

export default PokemonCard;