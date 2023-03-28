import PropType from "prop-types";

function PokemonCard(props) {
  return (
    <figure>
      <img src={props.pokemon.imgSrc} alt={props.pokemon.name} />
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.imgSrc.isRequired,
  }).isRequired,
};

export default PokemonCard;
