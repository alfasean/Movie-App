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
    <Carousel className='py-2' controls={false} indicators={false} interval={5000}> {/* Mengatur interval menjadi 2 detik */}
      {movies.map((movie, index) => (
        <Carousel.Item key={index}>
          <div className="slide-container">
            <img
              className="d-block slide"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.title}
            />
          </div>
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
