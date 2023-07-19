import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY
const endPoint = process.env.REACT_APP_ENDPOINT

export const getMovie = async () => {
  const movie = await axios.get(`${endPoint}/movie/popular?page=1&api_key=${apiKey}`)
  return movie.data.results
}

export const searchMovie = async (q) => {
  const search = await axios.get(`${endPoint}/search/movie?page=1&query=${q}&api_key=${apiKey}`)
  return search.data
}

export const getMovieUpcoming = async () => {
  const movie = await axios.get(`${endPoint}/movie/upcoming?page=1&api_key=${apiKey}`)
  return movie.data.results
}

export const getMovieTop_rated = async () => {
  const movie = await axios.get(`${endPoint}/movie/top_rated?page=1&api_key=${apiKey}`)
  return movie.data.results
}


