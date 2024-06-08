import { Container } from "./styles"
import propTypes from "prop-types"

function SpanGenres ({genres}){
    return (
        <Container>
            {genres && genres.map((genres) => <span key={genres.id}>{genres.name}</span>)}
        </Container>
    )
}

SpanGenres.propTypes = {
    genres: propTypes.node.isRequired,
  };
 

export default SpanGenres