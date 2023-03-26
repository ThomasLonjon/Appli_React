import { useState } from "react";
import "./App.css";

function App() {
  const pokemon = {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  };

  return (
    <div className="App">
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

function PokemonCard(props) {
  return (
    <figure>
      <img src={props.pokemon.imgSrc} alt={props.pokemon.name} />
    </figure>
  );
}

export default App;
