function NavBar({ setPokemonIndex, pokemonList }) {
  const handleClick = (e) => {
    setPokemonIndex(e);
  };

  return (
    <nav>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={pokemon.name}>
            <button onClick={() => handleClick(index)}>{pokemon.name}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
