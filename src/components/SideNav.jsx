import React, { useState } from "react";
import { pokemonList } from "../utils/PokemonsList";

export default function SideNav({selectedPokemon,setSelectedPokemon}) {
const [pokemon,setPokemon]=useState("");
const filteredPokemonList = pokemonList.filter((poke) =>
  poke.name.toLowerCase().includes(pokemon.toLowerCase())
);
  return (
    
    <nav className="w-1/4 h-screen border-2 border-gray-500 shadow-lg rounded-lg flex flex-col justify-evenly">
      <div className=" h-1/5 flex justify-evenly  flex-col ">
      <p className="text-6xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">Pokédex</p>
        <input
          type="text"
          placeholder="eg. Pika.."
          name="pokemon"
          value={pokemon}
          onChange={(e)=>{
            setPokemon(e.target.value);
          }}
          className="h-1/4 mx-auto bg-transparent py-2 px-2 border border-slate-300 rounded-lg w-3/4"
        />
      </div>
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
      {/* <div className="h-4/5 overflow-y-scroll"> 
        {pokemonList.map((pokemon, pokeIndex) => {
          return (
            <div className="   h-12 hover:bg-neutral-500" onClick={()=>{
                const pokemonName=pokemon.name.charAt(0).toLowerCase()+pokemon.name.slice(1);
                setSelectedPokemon(pokemonName);
            }} key={pokeIndex}>
              <p className="px-2 text-xl ">
                <span>{pokeIndex + 1}. </span>
                {pokemon.name}
              </p>
            </div>
          );
        })}
      </div> */}
    </nav>
  );
}
