import { useContext } from "react"
import { MealContext } from "./MealContext"
import { Link } from "react-router"

export default function SavedPage(){
const {savedMeal}  = useContext(MealContext)


    return (<div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)", // 4 equal columns
        gap: "10px", // Spacing between items
        padding: "10px"
    }}>
        
        
        {savedMeal.map((meal) => (
            <div key={meal.idMeal} style={{
                border: "1px solid #ddd", 
                borderRadius: "8px", 
                padding: "10px", 
                textAlign: "center"
            }}>
                <Link to = {`/recipe/${meal.idMeal}`} >
                
                    <img src={meal.strMealThumb} alt={meal.strMeal} style={{ 
                        width: "100%", 
                        height: "auto", 
                        borderRadius: "8px" 
                    }} />
                   
                    
                    <p style={{ fontWeight: "bold", marginTop: "8px" }}>{meal.strMeal}</p>
                    <p>Category: {meal.strCategory}</p>
                    <h1>Origin: {meal.strArea}</h1>
                    
                    </Link>
                
                
               
            </div>
        ))}
    </div>
    

)
}
        
    