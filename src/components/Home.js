import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="homepage-container">
      <h1>🍲 Welcome to Recipe Finder</h1>
      <p>Discover delicious recipes from around the world.</p>
      <p>Please click below to start exploring!</p>

      <div className="button-group">
        <Link to="/recipe" className="btn primary-btn">Browse Recipes</Link>
        <Link to="/recipe/saved" className="btn secondary-btn">My Favorites</Link>
      </div>
    </div>
  );
}
