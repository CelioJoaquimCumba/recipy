import { category } from "../models/Category";
import { mealsData } from "./Meals";

export const categoriesData:category[] = []
mealsData.forEach((meal) => {
    meal.categories.forEach((category) => {
        if(!categoriesData.includes(category))categoriesData.push(category);
    });
});