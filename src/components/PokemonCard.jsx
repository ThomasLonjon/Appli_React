function PokemonCard(props) {
  return (
    <figure>
      <img src={props.pokemon.imgSrc} alt={props.pokemon.name} />
    </figure>
  );
}

export default PokemonCard;
