import "./MovieCast.css";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../api/api';
import { IMAGE_BASE_URL } from '../../api/api';

export const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieCast(movieId)
      .then(data => setCast(data.cast))
      .catch(err => setError(err.message));
  }, [movieId]);

  if (error) return <p className="cast-error">{error}</p>;
  if (!cast.length) return <p className="not-found">No cast information available.</p>;

  return (
    <ul className="cast-list">
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id} className="cast-item">
          {profile_path && <img src={`${IMAGE_BASE_URL}${profile_path}`} alt={name} width="100" />}
          <p className="cast-name">{name}</p>
          <p className="cast-character">Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};