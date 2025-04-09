import { createBrowserRouter, RouterProvider } from "react-router";
import RootLaylout from "./components/Root";
import HomePage from "./components/Home";
import RecipePage, {loader as mealLoader} from "./components/RecipePage";
import RecipeDetailPage,{loader as itemLoader} from "./components/RecipeDetail";
import RecipeSearchPage from "./components/RecipeSearch";
import SavedPage from "./components/Saved";

function App() {


  const router = createBrowserRouter([
{
path: '/',
element:<RootLaylout/>,
children:[
  {index:true, element:<HomePage/>},
  {path:'recipe', element:<RecipePage/>,
    loader:mealLoader

  },
  {path:'recipe/:id', element: <RecipeDetailPage/>,
    loader:itemLoader
  },
  {path:'recipe/search', element:<RecipeSearchPage/>},
  {path:'recipe/saved', element: <SavedPage/>}

]



}







  ])
 



  





  return (
    <RouterProvider router={router}/>
    
   
  )
    
  
}

export default App;
