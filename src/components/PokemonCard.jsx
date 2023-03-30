import PropType from "prop-types";

function PokemonCard(props) {
  return (
    <figure>
      <img src={props.pokemon.imgSrc} alt={props.pokemon.name} />
      <p>{props.pokemon.name}</p>
    </figure>
  );
}

// PokemonCard.propTypes = {
//   pokemon: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     imgSrc: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default PokemonCard;
