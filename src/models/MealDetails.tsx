import { category } from "./Category";

export type mealDetails = {
    name: string,
    categories: category[],
    image: string,
    duration: number,
}