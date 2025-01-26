import "./MovieList.css";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieList = ({ movies }) => (
  <ul className="movies-lst">
    {movies.map(({ id, title }) => (
      <li key={id} className="movie-item">
        <Link to={`/movies/${id}`} className="movie-link">{title}</Link>
      </li>
    ))}
  </ul>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
