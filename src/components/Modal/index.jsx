

import { useEffect,useState } from "react"
import { Container, Background } from "./styles"
import { getMovieVideos } from "../../services/getData"
import propTypes from "prop-types"



function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState()

  useEffect(() => {
    async function getMovies() {
      setMovie(await getMovieVideos(movieId))

     

    }
    getMovies()
  }, [])
  return (
    <Background onClick={() => setShowModal(false)}>
      {movie &&(
      <Container>
        <iframe
          src={`https://www.youtube.com/embed/${movie[0].key}`}
          title="youtube Video player"
          height="500px"
          width="100%"
          
        ></iframe>
      </Container>
    )}
    </Background>
  )
}

Modal.propTypes = {
  movieId: propTypes.node.isRequired
}
Modal.propTypes = {
  setShowModal: propTypes.node.isRequired
}


export default Modal;