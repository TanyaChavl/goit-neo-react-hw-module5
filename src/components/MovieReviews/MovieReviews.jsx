import "./MovieReviews.css";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../api/api';

export const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(data => setReviews(data.results))
      .catch(err => setError(err.message));
  }, [movieId]);

  if (error) return <p>{error}</p>;
  if (!reviews.length) return <p>We don&apos;t have any reviews for this movie.</p>;

  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <p><strong>{author}:</strong></p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};