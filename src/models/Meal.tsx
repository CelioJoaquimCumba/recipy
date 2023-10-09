import { category } from "./Category"

export type meal = {
    id: string,
    name: string,
    categories: category[],
    image: string,
    duration: number
}