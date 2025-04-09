import { Link, Form } from "react-router-dom";
import { useState, useContext } from "react";
import { MealContext } from "./MealContext";
import { MdCancel } from "react-icons/md";
import { IoMdCheckbox } from "react-icons/io";
import "./RecipeList.css";

export default function RecipeList({ meals }) {
  const { handleSave } = useContext(MealContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="recipe-list-wrapper">
      <div className="search-bar">
        <label>Looking for something else?</label>
        <Form method="GET" className="search-controls">
          <input
            type="text"
            name="q"
            placeholder="Search for a recipe"
            value={searchTerm}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </Form>
      </div>

      <div className="recipe-grid">
        {meals.map((meal) => (
          <div className="meal-card" key={meal.idMeal}>
            <Link to={meal.idMeal} className="meal-link">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="meal-img"
              />
              <h3>{meal.strMeal}</h3>
              <p>Category: {meal.strCategory}</p>
              <p>Origin: {meal.strArea}</p>
              <div className="veg-check">
                Vegetarian Friendly?{" "}
                {meal.strCategory.toLowerCase() === "vegetarian" ? (
                  <IoMdCheckbox color="green" size={20} style={{ marginLeft: "6px" }} />
                ) : (
                  <MdCancel color="red" size={20} style={{ marginLeft: "6px" }} />
                )}
              </div>
            </Link>

            <Link to="/recipe/saved">
              <button onClick={() => handleSave(meal)}>Save</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
