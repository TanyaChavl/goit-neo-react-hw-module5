import "./HomePage.css";
import { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../../api/api';
import { MovieList } from '../../components/MovieList/MovieList';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPopularMovies()
      .then(data => setMovies(data.results))
      .catch(err => setError(err.message));
  }, []);

  return (
    <div className="home">
      <h1 className="home-header">Trending today</h1>
      {error ? <p className="home-error">{error}</p> : <MovieList movies={movies} />}
    </div>
  );
};