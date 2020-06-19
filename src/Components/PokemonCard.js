import React from 'react';

const PokemonCard = ({ pokemon }) => {
  const { id, name, types, image } = pokemon;
  return (
    <div className="container">
      <div>{ id }</div>
      <div>{ name }</div>
      <div>{ types }</div>
      <img src={ image } alt={ name }/>
    </div>
  )
}

export default PokemonCard;