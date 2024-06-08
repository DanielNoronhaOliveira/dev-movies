import { useEffect, useState } from "react"


import Slider3 from "../../../components/Slider3"

import { Background, Container } from "./styles"
import { getSeriesPopular, getTopSerie } from "../../../services/getData3"
import { getImages } from "../../../utils/get_images3"
function Series() {
    const [topSeries, setTopSeries] = useState()
    const [SeriesPopular, setSeriesPopular] = useState()



    useEffect(() => {
        async function getAllData() {

            Promise.all([
                getTopSerie(),
                getSeriesPopular(),

            ])
                .then(([topSeries, SeriesPopular]) => {
                    setTopSeries(topSeries)
                    setSeriesPopular(SeriesPopular)
                })
                .catch((error

                ) => console.error(error))

        }

        getAllData()

    }, [])
    return (
        <>
            {topSeries && (
                <Background img={getImages(topSeries.backdrop_path)}>
                    <Container>

                    </Container>

                </Background>

            )}

            {topSeries && <Slider3 info={topSeries} title={'top Series'} />}
            {SeriesPopular && <Slider3 info={SeriesPopular} title={'Series Populares'} />}
        </>
    )
}

export default Series