import { mealsData } from "../data/Meals";
import { mealsDetailedData } from "../data/MealsDetails";
import { meal } from "../models/Meal";
import { mealDetails } from "../models/MealDetails";

export const getMealDetailedById = (id: string): mealDetails|undefined => {

    return mealsDetailedData.find((meal) => meal.id === id)
}
export const getMealById = (id: string): meal|undefined => {
    return mealsData.find((meal) => meal.id === id)
}