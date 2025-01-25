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

  if (error) return <p>{error}</p>;
  if (!movie || !imageBaseURL) return <p>Loading...</p>;

  return (
    <div>
      <button onClick={() => window.history.back()}>Go back</button>
      <div>
        {movie.poster_path && (
          <img src={`${imageBaseURL}w500${movie.poster_path}`} alt={movie.title} width="300" />
        )}
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p>User Score: {movie.vote_average * 10}%</p>
      </div>
      <ul>
        <li><Link to="cast">Cast</Link></li>
        <li><Link to="reviews">Reviews</Link></li>
      </ul>
      <Outlet />
    </div>
  );
};