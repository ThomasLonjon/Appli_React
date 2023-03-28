import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
  return (
    <div className="App">
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

const pokemon = {
  name: "bulbasaur",
  imgSrc:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
};

export default App;
