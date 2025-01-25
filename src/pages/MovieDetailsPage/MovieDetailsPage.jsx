import "./MovieDetailsPage.css";
import { useParams, Outlet, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../../api/api';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(setMovie)
      .catch(err => setError(err.message));
  }, [movieId]);

  if (error) return <p>{error}</p>;
  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <button onClick={() => window.history.back()}>Go back</button>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>User Score: {movie.vote_average * 10}%</p>
      <ul>
        <li><Link to="cast">Cast</Link></li>
        <li><Link to="reviews">Reviews</Link></li>
      </ul>
      <Outlet />
    </div>
  );
};