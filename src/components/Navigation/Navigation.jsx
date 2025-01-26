import "./Navigation.css";
import { NavLink } from 'react-router-dom';

export const Navigation = () => (
  <nav className="navigation">
    <NavLink to="/" end>Home</NavLink>
    <NavLink to="/movies">Movies</NavLink>
  </nav>
);