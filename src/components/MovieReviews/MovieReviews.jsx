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

  if (error) return <p className="review-error">{error}</p>;
  if (!reviews.length) return <p className="not-found">We don&apos;t have any reviews for this movie.</p>;

  return (
    <ul className="reviews-list">
      {reviews.map(({ id, author, content }) => (
        <li key={id} className="review-item">
          <p className="review-authot"><strong>{author}:</strong></p>
          <p className="review-content">{content}</p>
        </li>
      ))}
    </ul>
  );
};