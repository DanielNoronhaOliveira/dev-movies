import api from "./api";

export async function getTopSerie(){
    const { data: { results } } = await api.get("/tv/top_rated")

    return results

}

export async function getSeriesPopular(){
    const { data: { results } } = await api.get("/tv/popular")

    return results

}