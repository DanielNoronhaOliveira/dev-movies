
import { getImages } from "../../utils/get_images";
import { Container } from "./styles"
import PropTypes from "prop-types"



function Card({ item }) {

  return (
    <Container>
      <img src={getImages(item.poster_path || item.profile_path || '')} />
      <h3>{item.title || item.name}</h3>
    </Container>

  )
}


Card.propTypes = {
  item: PropTypes.node.isRequired,
};



export default Card;