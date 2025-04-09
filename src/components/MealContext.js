import { createContext } from "react";
import { useState } from "react";

export const MealContext = createContext()
export default function MealProvider({children}){
    const [savedMeal, setSavedMeal] = useState([])

    const handleSave =(meal)=>{
        return setSavedMeal([...savedMeal, meal])
        
        }

        const value ={
           savedMeal,
            handleSave
        }
        

    return (
        <MealContext.Provider value= {value}>

            {children}
        </MealContext.Provider>

    )
}


