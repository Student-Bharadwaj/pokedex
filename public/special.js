





import React, { useState } from 'react';

const PokemonList = ({ pokemonList }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  // Filter the pokemonList based on search input
  const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search Input */}
      <input
        type="text"
        className="w-full p-2 mb-4 border border-neutral-400 rounded"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Pokémon List */}
      <div className="h-4/5 overflow-y-scroll">
        {filteredPokemonList.map((pokemon, pokeIndex) => {
          return (
            <div
              className="h-12 hover:bg-neutral-500"
              onClick={() => {
                const pokemonName =
                  pokemon.name.charAt(0).toLowerCase() + pokemon.name.slice(1);
                setSelectedPokemon(pokemonName);
              }}
              key={pokeIndex}
            >
              <p className="px-2 text-xl">
                <span>{pokeIndex + 1}. </span>
                {pokemon.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonList;


