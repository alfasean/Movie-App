import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Add this line
import './App.css';
import { getMovie, searchMovie, getMovieUpcoming, getMovieTop_rated } from "./api";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import Footer from './components/footer/Footer';

function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [visiblePopularMovies, setVisiblePopularMovies] = useState(4);
  const [visibleUpcomingMovies, setVisibleUpcomingMovies] = useState(4);
  const [visibleTopRatedMovies, setVisibleTopRatedMovies] = useState(4);

  useEffect(() => {
    getMovie()
      .then((result) => {
        setPopularMovies(result);
      })
      .catch((error) => {
        console.error("Error fetching popular movies:", error);
      });

    getMovieUpcoming()
      .then((result) => {
        setUpcomingMovies(result);
      })
      .catch((error) => {
        console.error("Error fetching upcoming movies:", error);
      });

    getMovieTop_rated()
      .then((result) => {
        setTopRatedMovies(result);
      })
      .catch((error) => {
        console.error("Error fetching top rated movies:", error);
      });
  }, []);

  useEffect(() => {
    console.log("popularMovies:", popularMovies);
    console.log("upcomingMovies:", upcomingMovies);
    console.log("topRatedMovies:", topRatedMovies);
  }, [popularMovies, upcomingMovies, topRatedMovies]);

  const PopularMovie = ({ movies }) => {
    return movies.slice(0, visiblePopularMovies).map((movie, i) => {
      return (
        <div className="movie-wrapper" key={i}>
           <Link to={`/movies/${movie.id}`}>
          <img
            className="movie-image"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={`Poster ${movie.title}`}
          />
          </Link>
          <div className="movie-title">{movie.title}</div>
          <div className="movie-content">
            <div className="movie-rating">{renderStars(movie.vote_average)}</div>
            <div className="movie-date">{movie.release_date}</div>
          </div>
        </div>
      );
    });
  };

  const UpcomingMovie = ({ movies }) => {
    return movies.slice(0, visibleUpcomingMovies).map((movie, i) => {
      return (
        <div className="movie-wrapper" key={i}>
          <Link to={`/movies/${movie.id}`}>
          <img
            className="movie-image"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={`Poster ${movie.title}`}
          />
          </Link>
          <div className="movie-title">{movie.title}</div>
          <div className="movie-content">
            <div className="movie-rating">{renderStars(movie.vote_average)}</div>
            <div className="movie-date">{movie.release_date}</div>
          </div>
        </div>
      );
    });
  };

  const TopRatedMovie = ({ movies }) => {
    return movies.slice(0, visibleTopRatedMovies).map((movie, i) => {
      return (
        <div className="movie-wrapper" key={i}>
          <Link to={`/movies/${movie.id}`}>
          <img
            className="movie-image"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={`Poster ${movie.title}`}
          />
          </Link>
          <div className="movie-title">{movie.title}</div>
          <div className="movie-content">
            <div className="movie-rating">{renderStars(movie.vote_average)}</div>
            <div className="movie-date">{movie.release_date}</div>
          </div>
        </div>
      );
    });
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

  const loadMorePopularMovies = () => {
    setVisiblePopularMovies((prevVisiblePopularMovies) => prevVisiblePopularMovies + 4);
  };

  const loadMoreUpcomingMovies = () => {
    setVisibleUpcomingMovies((prevVisibleUpcomingMovies) => prevVisibleUpcomingMovies + 4);
  };

  const loadMoreTopRatedMovies = () => {
    setVisibleTopRatedMovies((prevVisibleTopRatedMovies) => prevVisibleTopRatedMovies + 4);
  };

  const search = async (q) => {
    if (q.length > 3) {
      const searchResult = await searchMovie(q);
      setPopularMovies(searchResult.results);
    } else {
      getMovie()
        .then((result) => {
          setPopularMovies(result);
        })
        .catch((error) => {
          console.error("Error fetching popular movies:", error);
        });
    }
  };

  return (
    <div className="App">
      <Navbar onSearch={search} />
      <header className="App-header">
      <Jumbotron /> 
        <div className="mt-5 container">
          <h1 className="title-movies">Popular Movies</h1>
        </div>
        <div className="container movie-container">
          <PopularMovie movies={popularMovies} />
        </div>
        {visiblePopularMovies < popularMovies.length && (
          <div className="mt-3 d-flex justify-content-center">
            <button onClick={loadMorePopularMovies} className="btn button mb-5">Load More</button>
          </div>
        )}

        <div className="mt-1 container">
          <h1 className="title-movies">Top Rated Movies</h1>
        </div>
        <div className="container movie-container">
          <TopRatedMovie movies={topRatedMovies} />
        </div>
        {visibleTopRatedMovies < topRatedMovies.length && (
          <div className="mt-3 d-flex justify-content-center">
            <button onClick={loadMoreTopRatedMovies} className="btn button mb-5">Load More</button>
          </div>
        )}

        <div className="mt-1 container">
          <h1 className="title-movies">Upcoming Movies</h1>
        </div>
        <div className="container movie-container">
          <UpcomingMovie movies={upcomingMovies} />
        </div>
        {visibleUpcomingMovies < upcomingMovies.length && (
          <div className="mt-3 d-flex justify-content-center">
            <button onClick={loadMoreUpcomingMovies} className="btn button mb-5">Load More</button>
          </div>
        )}
      </header>
      <Footer/>
    </div>
  );
}

export default App;
