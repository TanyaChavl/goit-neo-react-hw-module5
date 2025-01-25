export const API_URL = 'https://api.themoviedb.org/3';
export const API_KEY = 'your_api_key'; // Заміни на свій API ключ
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const fetchPopularMovies = async () => {
  const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
  if (!response.ok) throw new Error('Failed to fetch popular movies');
  return response.json();
};

export const fetchMovieDetails = async (movieId) => {
  const response = await fetch(`${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
  if (!response.ok) throw new Error('Failed to fetch movie details');
  return response.json();
};

export const fetchMovieCast = async (movieId) => {
  const response = await fetch(`${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
  if (!response.ok) throw new Error('Failed to fetch movie cast');
  return response.json();
};

export const fetchMovieReviews = async (movieId) => {
  const response = await fetch(`${API_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`);
  if (!response.ok) throw new Error('Failed to fetch movie reviews');
  return response.json();
};

export const searchMovies = async (query) => {
  const response = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1`);
  if (!response.ok) throw new Error('Failed to search movies');
  return response.json();
};