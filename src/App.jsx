import { useEffect, useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/Navbar";

function App() {
  ////////////////////////////////////DONNEES ENTREE/////////////////////////////////////

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  ////////////////////////////////////USESTATE/////////////////////////////////////

  const [pokemonIndex, setPokemonIndex] = useState(0);

  useEffect(() => {
    alert("Welcome in this amazing world, this is an automatic message !!!");
  }, []);

  ////////////////////////////////////RETURN/////////////////////////////////////
  return (
    <div className="App">
      <NavBar
        setPokemonIndex={setPokemonIndex}
        pokemonIndex={pokemonIndex}
        pokemonList={pokemonList}
      />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}

export default App;
