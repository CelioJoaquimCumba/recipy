import { meal } from "../models/Meal";
import { mealsDetailedData } from "./MealsDetails";


export const mealsData: meal[] = mealsDetailedData.map(({id, name, categories, image, duration}) => {
    return {
        id,name,categories,image,duration
    }
})