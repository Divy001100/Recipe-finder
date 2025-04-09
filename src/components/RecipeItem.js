import './RecipeItem.css';
import { useNavigate } from 'react-router';

export default function RecipeItem({ meal }) {
  const navigate = useNavigate();

  if (!meal) return <p>Loading...</p>;

  if (meal.strYoutube === '') {
    return (
      <div className="no-instructions">
        <p>Sorry, no instructions available</p>
        <p>Worry not, we have lots of other options</p>
        <button className="back-btn" onClick={() => navigate(-1)}>
          Browse other recipes
        </button>
      </div>
    );
  }

  return (
    <div className="recipe-section">
      {/* Hero Section */}
      <div
        className="hero"
        style={{
          backgroundImage: `url(${meal.strMealThumb})`,
        }}
      >
        <h1>{meal.strMeal}</h1>
        <p className="category">Category: {meal.strCategory} | Origin: {meal.strArea}</p>
      </div>

      {/* Ingredients Section */}
      <div className="ingredients-section">
        <h2>🧂 Ingredients</h2>
        <ul>
          {[...Array(20)].map((_, i) =>
            meal[`strIngredient${i + 1}`] ? (
              <li key={i}>
                {meal[`strMeasure${i + 1}`]} {meal[`strIngredient${i + 1}`]}
              </li>
            ) : null
          )}
        </ul>
      </div>

      {/* Instructions Section */}
      <div className="instructions-section">
        <h2>👨‍🍳 Instructions</h2>
        <p>{meal.strInstructions}</p>
      </div>

      {/* Video Section */}
      <div className="video-section">
        <h2>🎥 Watch & Cook</h2>
        <iframe
          src={meal.strYoutube.replace('watch?v=', 'embed/')}
          title="Recipe Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
