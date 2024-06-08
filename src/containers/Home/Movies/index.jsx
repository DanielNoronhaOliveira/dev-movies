import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Button2 from "../../../components/Button2"
import { Background, Container, Info, ContainerButtons, Poster, } from "./styles"
import Slider from "../../../components/Slider2"
import { getImages } from "../../../utils/get_images2"
import Modal from "../../../components/Modal2"
import { getMovies, getTopMovies } from "../../../services/getData2" //getMovies,  getTopMovies


function Movies(){
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const navigate = useNavigate ()

    useEffect(() => {
        async function getAllData() {

         Promise.all([
            getMovies(),
            getTopMovies(),
        ])
        .then(([movie, topMovies]) => {
           setMovie(movie)
           setTopMovies(topMovies )
        })
        .catch((error
            
        ) => console.error(error))
        }

        getAllData()

    }, [])
    return (
        <>
        {movie && (   // (funciona como if no react)

            <Background img={getImages(movie.backdrop_path)}>
                {showModal && <Modal movieId={movie.id} setShowModal={setShowModal} />}
                <Container>
                    <Info>
                        <h1>{movie.title}</h1>
                        <p>{movie.overview}</p>
                        <ContainerButtons>
                            <Button2 onClick={() => navigate(`/detalhe/${movie.id}`)}>
                                Assita Agora

                            </Button2 >
                            <Button2 onClick={() => setShowModal(true)}>Assita o trailer</Button2>
                        </ContainerButtons>


                    </Info>
                    <Poster>
                        <img alt="capa-do-filme" src={getImages(movie.poster_path)} />
                    </Poster>
                </Container>
            </Background>
        )}
        {topMovies && <Slider info={topMovies} title={'top Filmes'} />}
        </>
    )
}
export default Movies