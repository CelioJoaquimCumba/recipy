import { mealsData } from "../data/Meals"
import { meal } from "../models/Meal"

export const getSearchMeals = (input: string[]):meal[] => {
    if(input.length === 0 ){
        return []
    }
    const lowercaseInputs = input.map(input => input.toLowerCase());
    const results = mealsData.filter(meal => {
    return lowercaseInputs.some(input =>{
            return meal.name.toLowerCase().includes(input) ||
            meal.categories.some(category => category.toLowerCase().includes(input))
        })
    });
    return Array.from(new Set(results))
}