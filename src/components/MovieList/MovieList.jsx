import "./MovieList.css";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieList = ({ movies }) => (
  <ul>
    {movies.map(({ id, title }) => (
      <li key={id}>
        <Link to={`/movies/${id}`}>{title}</Link>
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
