import React, { useState } from "react";
import { getMeals } from "../api/mealApi";

export const Meal = () => {
    const [ meals ] = useState()
//     useEffect(() => {
//     const fetchMeals = async () => {
//         try {
//             const data = await getMeals();
//             setMeal(data)
//             console.log(data);
//         } catch (error) {
//             console.error("Error fetching meals:", error);
//         }
//     };

//     fetchMeals();
// }, []);
    return (
        <div>
            {meals ? 
                <div className="w-screen h-screen">
                    "done"
                </div>
             : 
                <div className="w-screen h-screen flex justify-center items-center">
                    "loading"
                </div>
             }
        </div>
    );
}