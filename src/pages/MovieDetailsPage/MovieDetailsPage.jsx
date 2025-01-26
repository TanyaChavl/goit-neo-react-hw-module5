import "./MovieDetailsPage.css";
import { useParams, Outlet, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchImageBaseURL, fetchMovieDetails } from '../../api/api';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [imageBaseURL, setImageBaseURL] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchImageBaseURL()
      .then(setImageBaseURL)
      .catch(err => setError(err.message));

    fetchMovieDetails(movieId)
      .then(setMovie)
      .catch(err => setError(err.message));
  }, [movieId]);

  if (error) return <p className="movie-error">{error}</p>;
  if (!movie || !imageBaseURL) return <p className="movie-loader">Loading...</p>;

  return (
    <div className="movie-details">
      <button onClick={() => window.history.back()} className="movie-button">Go back</button>
      <div className="movie-poster">
        {movie.poster_path && (
          <img src={`${imageBaseURL}w500${movie.poster_path}`} alt={movie.title} width="300" />
        )}
        <div className="movie-text">
          <h1 className="movie-title">{movie.title}</h1>
          <p className="movie-text">User Score: {Math.round(movie.vote_average * 10)}%</p>
          <h4>Overview</h4>
          <p className="movie-text">{movie.overview}</p>
          <h4>Genres</h4>
          <p className="movie-text">
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          
        </div>
      </div>
      <h4 className="info-header">Additional information</h4>
      <ul className="movie-list">
        <li className="movie-list-item"><Link to="cast">Cast</Link></li>
        <li className="movie-list-item"><Link to="reviews">Reviews</Link></li>
      </ul>
      <Outlet />
    </div>
  );
};