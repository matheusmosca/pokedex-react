import React, { useState } from 'react';
import Header from './Components/Header';
import PokemonList from './Components/PokemonList';
import { useEffect } from 'react';
import axios from 'axios';

import './styles/styles.css'
import './styles/types.css'

function App() {
  // pokemon = { id: number, name: str, types: [str, str], image: imgURL }
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const nextPage = 30;

  async function fetchPokemons() {
    const response = await axios({
      method: 'GET',
      url: `https://pokeapi.co/api/v2/pokemon/?limit=30&offset=${offset}`,
    })
    const data = await response.data;
    const pokemonsURL = await data.results
    
    const pokemonsData = Promise.all(pokemonsURL.map(async ({ url }) => {
      const response = await axios({
        method: 'GET',
        url
      })
      const data = await response.data;
      const { name, id, types: typesRequest, sprites: { front_default: image } } = data;
      console.log(typesRequest)
      const types = [];
      // If the pokemon has two types
      if (typesRequest.length > 1) {
        types.push(typesRequest[0].type.name);
        types.push(typesRequest[1].type.name);
        // If the pokemon has only one type
      } else {
        types.push(typesRequest[0].type.name);
      }
      const newPokemon = { id, name, types, image }
      return newPokemon
    }));
    setPokemons([...pokemons, ...await pokemonsData]);
    setOffset(offset + nextPage);
  }

  useEffect(() => {
    fetchPokemons()
  }, []);

  return (
    <>
      <Header />
      { pokemons.length > 0 && <PokemonList handleButtonClick={ fetchPokemons } pokemons={ pokemons }/> }
    </>
  );
}
export default App;
