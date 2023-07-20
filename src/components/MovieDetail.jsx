import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getMovieVideos, getGenres, getMovieCredits, searchMovie, getMovie } from './../api';
import './../App.css';
import Footer from './../components/footer/Footer';
import Navbar from './../components/navbar';
import { Link } from 'react-router-dom';

const MovieDetail = () => {
const { id } = useParams();
const [movie, setMovie] = useState({});
const [videos, setVideos] = useState([]);
const [genres, setGenres] = useState([]);
const [cast, setCast] = useState([]);
const [watchVideoUrl, setWatchVideoUrl] = useState('');
const [popularMovies, setPopularMovies] = useState([]);
const [visiblePopularMovies, setVisiblePopularMovies] = useState(4);

useEffect(() => {
// Mengambil informasi detail film berdasarkan ID
const fetchData = async () => {
try {
const movieDetails = await getMovieDetails(id);
setMovie(movieDetails);

const movieVideos = await getMovieVideos(id);
setVideos(movieVideos.slice(0, 3));

const movieGenres = await getGenres();
setGenres(movieGenres);

const movieCredits = await getMovieCredits(id);
setCast(movieCredits.cast.slice(0, 5));

if (movieVideos.length > 0) {
const trailerVideo = movieVideos.find(video => video.type === 'Trailer');
if (trailerVideo) {
setWatchVideoUrl(`https://www.youtube.com/watch?v=${trailerVideo.key}`);
}
}

const popularMoviesData = await getMovie();
setPopularMovies(popularMoviesData);
} catch (error) {
console.error('Error fetching movie details:', error);
}
};

fetchData();
}, [id]);

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

const search = async (query) => {
if (query.length > 3) {
try {
const searchResult = await searchMovie(query);
setMovie(searchResult.results);
} catch (error) {
console.error('Error fetching search result:', error);
}
} else {
// Menampilkan data film sesuai dengan ID jika query tidak memenuhi syarat
const fetchData = async () => {
try {
const movieDetails = await getMovieDetails(id);
setMovie(movieDetails);

const movieVideos = await getMovieVideos(id);
setVideos(movieVideos.slice(0, 3));

const movieGenres = await getGenres();
setGenres(movieGenres);

const movieCredits = await getMovieCredits(id);
setCast(movieCredits.cast.slice(0, 5));

if (movieVideos.length > 0) {
const trailerVideo = movieVideos.find(video => video.type === 'Trailer');
if (trailerVideo) {
setWatchVideoUrl(`https://www.youtube.com/watch?v=${trailerVideo.key}`);
}
}

const popularMoviesData = await getMovie();
setPopularMovies(popularMoviesData);
} catch (error) {
console.error('Error fetching movie details:', error);
}
};

fetchData();
}
};

const loadMorePopularMovies = () => {
setVisiblePopularMovies((prevVisiblePopularMovies) => prevVisiblePopularMovies + 4);
};

return (
<div className="app">
  <Navbar onSearch={search} />
  <div className="movie-detail">
    <div className="banner">
      <div className="backdrop-wrap">
        <div className="movie-backdrop" style={{
            backgroundImage: movie.backdrop_path
              ? `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
              : null,
            backgroundSize: 'cover'
          }}></div>
      </div>
      <div className="container detail-info mb-5">
        <div className="d-flex justify-content-center align-items-center">
          {movie.poster_path && (
          <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`Poster
            ${movie.title}`} />
          )}
          <div className="info">
            <h1 className='judul'>{movie.title}</h1>
            <div className="movie-rating ">{renderStars(movie.vote_average)}</div>
            {genres.length > 0 && movie.genres?.length > 0 && (
            <div className="genre-wrapper d-flex">
              <div className='genre d-flex'>
                {movie.genres.map((genre) => (
                <div className='genre-movie' key={genre.id}>{genre.name}</div>
                ))}
              </div>
            </div>
            )}
            <p className='overview'>{movie.overview}</p>

            {cast.length > 0 && (
            <div className="cast-wrapper">
              <h2 className='trailer'>Cast</h2>
              <div className='d-flex'>
                {cast.map((actor) => (
                <div className='cast' key={actor.id}>{actor.name}</div>
                ))}
              </div>
            </div>
            )}
          </div>
        </div>

        {videos.length > 0 && (
        <div className="movie-videos">
          <h2 className='trailer'>Trailer</h2>
          <div className="movie-video-container">
            {videos.map((video) => (
            <iframe className='movie-trailer' key={video.id} title="movie-trailer"
              src={`https://www.youtube.com/embed/${video.key}`} allowFullScreen></iframe>
            ))}

            <h2 className="trailer mt-5">Other Movies</h2>
            <div className="container movie-container">
              {popularMovies.slice(0, visiblePopularMovies).map((movie, index) => (
              <div className="movie-wrapper" key={index}>
                <Link to={`/movies/${movie.id}`}> <img className="movie-image"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`Poster ${movie.title}`} />
                </Link>
                <div className="movie-title">{movie.title}</div>
                <div className="movie-content">
                  <div className="movie-rating">{renderStars(movie.vote_average)}</div>
                  <div className="movie-date">{movie.release_date}</div>
                </div>
              </div>
              ))}
            </div>
            {visiblePopularMovies < popularMovies.length && ( <div className="mt-3 d-flex justify-content-center">
              <button onClick={loadMorePopularMovies} className="btn button mb-5">
                Load More
              </button>
          </div>
          )}

        </div>
      </div>
      )}
    </div>
  </div>

  <Footer />
</div>
</div>
);
};

export default MovieDetail;