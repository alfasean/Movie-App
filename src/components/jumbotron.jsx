import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; // Import axios
import '././../App.css';

function Jumbotron() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_ENDPOINT}/movie/popular?page=1&api_key=${process.env.REACT_APP_APIKEY}`);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Carousel className='py-2'>
      {movies.map((movie, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 slide"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} // Ganti URL dengan URL gambar dari API movie yang sesuai
            alt={movie.title}
          />
          <Carousel.Caption>
            <h3>{movie.title}</h3>
            <p>Rating: {movie.vote_average}</p>
            <p>Date: {movie.release_date}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Jumbotron;
