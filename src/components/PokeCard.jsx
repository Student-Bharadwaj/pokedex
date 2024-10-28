import React, { useEffect, useState } from "react";
import { pokemonList } from "../utils/PokemonsList";

export default function PokeCard({ selectedPokemon, setShowModal, setMove }) {
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    try {
      //fetch operation.
      const fetchFirstPokemon = async () => {
        const url = "https://pokeapi.co/api/v2/pokemon/" + selectedPokemon;
        const response = await fetch(url);
        const data = await response.json();

        setPokemonData(data);
      };

      fetchFirstPokemon();
    } catch (error) {
      console.log(error.message);
    }
  }, [selectedPokemon]);

  const pokemonName =
    selectedPokemon.charAt(0).toUpperCase() + selectedPokemon.slice(1);
  const pokemonImage = pokemonList.filter(
    (pokemon, pokeIndex) => pokemon.name === pokemonName
  );

  return (
    <div className=" overflow-y-scroll w-3/4 h-screen flex flex-col justify-around items-left ml-8">
      <div className="flex flex-col items-center">
        <p className="text-5xl font-semibold">{pokemonData.name}</p>

        <img
          width="250"
          src={pokemonImage[0].url}
          alt={`${pokemonData.name}-image`}
        />
      </div>
      <div className="text-2xl flex justify-around ">
        <p className="flex gap-6">
          Type:{" "}
          {pokemonData.types?.map((typeObj, index) => (
            <span key={index}>{typeObj.type.name}</span>
          ))}
        </p>
        <p>Moves: {pokemonData?.moves?.length}</p>
      </div>

      <div className="text-xl flex justify-around">
        <p>weight:{pokemonData.weight}</p>
        <p>height:{pokemonData.height}</p>
      </div>
      <div className="text-xl flex justify-around">
        <p>experience points: {pokemonData.base_experience}</p>
        <p className="flex gap-6">
          abilities:{" "}
          {pokemonData.abilities?.map((abilityObj, index) => (
            <span key={index}>{abilityObj.ability.name}</span>
          ))}
        </p>
      </div>

      <div className="flex justify-evenly flex-wrap">
        <img
          src={pokemonData.sprites?.back_default}
          alt="pokeImage"
          width="170"
        />
        <img
          src={pokemonData.sprites?.back_shiny}
          alt="pokeImage"
          width="170"
        />
        <img
          src={pokemonData.sprites?.front_default}
          alt="pokeImage"
          width="170"
        />
        <img
          src={pokemonData.sprites?.front_shiny}
          alt="pokeImage"
          width="170"
        />
      </div>
      <p className="text-4xl mb-5">Moves:</p>
      <div className="flex gap-4 flex-wrap">
        {pokemonData?.moves?.map((moveObj, index) => {
          return (
            <div
              className="border cursor-pointer hover:bg-neutral-600 border-slate-600 py-2 px-6 rounded-xl "
              key={index}
              onClick={() => {
                setShowModal(true);
                setMove(moveObj);
              }}
            >
              {moveObj.move.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
