import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './../Assets/logofix.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_ENDPOINT}/movie/popular?page=1&api_key=${process.env.REACT_APP_APIKEY}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const getBackgroundImage = () => {
    if (movies.length > 0) {
      const backdropPath = movies[5].backdrop_path;
      return `url(https://image.tmdb.org/t/p/original/${backdropPath})`;
    }
    return null;
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const renderStars = (rating) => {
    const starTotal = 10;
    const starPercentage = (rating / starTotal) * 100;
    const starRounded = `${Math.round(starPercentage / 10) * 10}%`;
    return (
    <div className="stars-outer">
      <div className="stars-inner" style={{ width: starRounded }}></div>
    </div>
    );
    };

  return (
    <header className='head' style={{ background: getBackgroundImage() }}>
      <nav className="container logo-brand">
        <a href="/">
          <img className='bauni' src={logo} alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
        </a>
      </nav>

      {movies.length > 0 && (
        <div className="header-container container">
          <h1 className='hero-judul'>{movies[5].title}</h1>
          <p className='hero-overview'>
            {movies[5].overview}
          </p>
          <div className="hero-rating">{renderStars(movies[5].vote_average)}</div>
          
          <Link to={`/movies/${movies[5].id}`}>
            <button className="btn watch">Watch</button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default HeroSection;
