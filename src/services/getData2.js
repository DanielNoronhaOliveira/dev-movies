import api from "./api";

export async function getMovies(){
    const { data: { results } } = await api.get("/movie/popular")

    return results[0]

}

export async function getTopMovies(){
    const { data: { results } } = await api.get("/movie/top_rated")

    return results

}
export async function getMovieVideos(movieId) {
    const {
         data: { results } 
        } = await api.get(`/movie/${movieId}/videos`)

        return results
    }
    export async function getMovieSimilar(movieId) {
        const {
             data: { results } 
            } = await api.get(`/movie/${movieId}/similar`)
    
            return results
        }
        export async function getMovieById(movieId) {
            const {data} = await api.get(`/movie/${movieId}`)
               
            return data
            }