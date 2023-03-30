function NavBar({ setPokemonIndex, pokemonIndex, pokemonList}) {
  const handleClickUp = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  const handleClickDown = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  return (
    <nav>
      {" "}
      {pokemonIndex > 0 && <button onClick={handleClickDown}>Previous</button>}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleClickUp}>Next</button>
      )}
    </nav>
  );
}

export default NavBar;
