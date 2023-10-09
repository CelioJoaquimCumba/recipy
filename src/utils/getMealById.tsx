import { mealDetails } from "../models/MealDetails";

export const getMealById = (id: string, meals: mealDetails[]): mealDetails|undefined => {

    return meals.find((meal) => meal.id === id)
}