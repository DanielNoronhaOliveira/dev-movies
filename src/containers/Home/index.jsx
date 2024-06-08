import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import Button from "../../components/Button"

import { Background, Container, Info, ContainerButtons, Poster, } from "./styles"
import Slider from "../../components/Slider"
import { getImages } from "../../utils/get_images"
import Modal from "../../components/Modal"
import { getArtista, getMovies, getSeriesPopular, getTopMovies, getTopSerie } from "../../services/getData"



function Home() {
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [SeriesPopular, setSeriesPopular] = useState()
    const [topPeople, setTopPeople] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        async function getAllData() {

         Promise.all([
            getMovies(),
            getTopMovies(),
            getTopSerie(),
            getSeriesPopular(),
            getArtista()
         ])
         .then(([movie, topMovies, topSeries, SeriesPopular, topPeople]) => {
            setMovie(movie)
            setTopMovies(topMovies )
            setTopSeries(topSeries )
            setSeriesPopular(SeriesPopular)
            setTopPeople(topPeople)
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
                                <Button onClick={() => navigate(`/detalhe/${movie.id}`)}>
                                    Assita Agora

                                </Button >
                                <Button onClick={() => setShowModal(true)}>Assita o trailer</Button>
                            </ContainerButtons>


                        </Info>
                        <Poster>
                            <img alt="capa-do-filme" src={getImages(movie.poster_path)} />
                        </Poster>
                    </Container>
                </Background>
            )}
            {topMovies && <Slider info={topMovies} title={'top Filmes'} />}
            {topSeries && <Slider info={topSeries} title={'top Series'} />}
            {SeriesPopular && <Slider info={SeriesPopular} title={'Series Populares'} />}
            {topPeople && <Slider info={topPeople} title={'Top Artistas'} />}
        </>
    )
}
export default Home