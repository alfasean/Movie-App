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

export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${endPoint}/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch movie details:', error);
  }
};

export const getMovieVideos = async (movieId) => {
  try {
    const response = await axios.get(`${endPoint}/movie/${movieId}/videos?api_key=${apiKey}`);
    return response.data.results;
  } catch (error) {
    throw new Error("Failed to fetch movie videos:", error);
  }
};

export const getGenres = async () => {
  try {
    const response = await axios.get(`${endPoint}/genre/movie/list?api_key=${apiKey}`);
    return response.data.genres;
  } catch (error) {
    throw new Error("Error fetching genres:", error);
  }
};

export const getMovieCredits = async (movieId) => {
  try {
    const response = await axios.get(`${endPoint}/movie/${movieId}/credits?api_key=${apiKey}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch movie credits:', error);
  }
};

