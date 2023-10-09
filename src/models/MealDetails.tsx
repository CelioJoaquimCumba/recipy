import { category } from "./Category";
import { ingredient } from "./Ingredient";
import { instruction } from "./Instructions";
import { meal } from "./Meal";

export type mealDetails = {
    id: string,
    name: string,
    description: string,
    categories: category[],
    rating: number,
    image: string,
    duration: number,
    instructions: instruction[],
    ingredients: ingredient[]
    similarMeals?: meal[]
}