import "./MoviesPage.css";
import { useState } from 'react';
import { searchMovies } from '../../api/api';
import { MovieList } from '../../components/MovieList/MovieList';

export const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(query)
      .then(data => setMovies(data.results))
      .catch(err => setError(err.message));
  };

  return (
    <div className="movies">
      <form onSubmit={handleSearch} className="movies-search">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
          className="movies-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      {error ? <p className="movies-error">{error}</p> : <MovieList movies={movies} />}
    </div>
  );
};