import RecipeItem from "./RecipeItem";
import { useLoaderData } from "react-router";

export default function RecipeDetailPage() {
  const data = useLoaderData();
  const meal =  data.meals[0]
  console.log(meal)

  return (
    <div>
      { <RecipeItem meal={meal} />}
    </div>
  );
}


export async function loader({ params }) {
  const id = params.id;
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);

  if (!response.ok) {
    throw new Error("Could not fetch the recipe details.");
  }

  return response; // ✅ No need for `.json()` in React Router v6.4+
}
