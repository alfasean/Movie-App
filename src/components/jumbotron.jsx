import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; // Import axios
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
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
    <Carousel className='py-2' controls={false} indicators={false} interval={5000}>
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
            <div className="d-flex">
              <div className="wrap-hero mx-3">
                <h3 className='hero-judul'>{movie.title}</h3>
                <p className='hero-overview'>{movie.overview}</p>
                <p className='hero-rating'>{movie.vote_average}</p>
                <p className='hero-date'>{movie.release_date}</p>
                <Link to={`/movies/${movie.id}`}>
                  <Button variant="primary">Detail</Button>
                </Link>
              </div>
              <div className="poster-container ml-auto"> {/* Menggunakan "ml-auto" untuk menggeser poster ke ujung kanan */}
                <img
                  className="poster"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={`Poster ${movie.title}`}
                />
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Jumbotron;
