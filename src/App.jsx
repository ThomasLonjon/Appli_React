import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
  const pokemon = {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  };

  return (
    <div className="App">
      <div> titre = Pokemon card</div>
    </div>
  );
}

export default App;
