import "./NotFoundPage.css";
import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
  <div>
    <h1>Page not found</h1>
    <Link to="/">Go to Home</Link>
  </div>
);