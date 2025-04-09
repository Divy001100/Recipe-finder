import { NavLink } from "react-router-dom";
import './MainNav.css';

export default function MainNav() {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <h1 className="logo">🍳 Recipe<span>Finder</span></h1>
        <ul className="nav-links">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/recipe" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Browse Recipes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
