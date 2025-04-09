
import RecipeList from "./RecipeList";
import { useLoaderData } from "react-router";
export default function RecipePage(){
const data = useLoaderData();
const meals = data.meals

  console.log(data)


    return (<div>
          <RecipeList meals = {meals} />
    </div>
  
    )
}

export async function loader({ request }) {
    const url =   new URL(request.url);  // Extract the full URL of the request
    const searchQuery =  url.searchParams.get("q"); // Get the value of "q" from the URL


    const apiUrl =  searchQuery 
        ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
        : `https://www.themealdb.com/api/json/v1/1/search.php?s=`;

    const  response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("Failed to fetch recipes");
    }

    return response;
}
