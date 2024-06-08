import { getImages } from "../../utils/get_images"
import propTypes from "prop-types"
import { Title, Container } from "./styles"


function Credits({ credits }) {
    return (
        <>
            <Title>Creditos</Title>
            {credits && (
            <Container>
                {credits.slice(0, 5).map((artist) => (
                    <div key={artist.id}>
                        <img src={getImages(artist.profile_path)} />
                        <p>{artist.original_name}</p>
                    </div>
                ))}
                <div></div>
            </Container>
            )}
        </>
    )
}

Credits.propTypes = {
    credits: propTypes.node.isRequired,
  };
  
export default Credits

