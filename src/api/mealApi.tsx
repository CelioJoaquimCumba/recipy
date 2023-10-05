import { meal } from "../models/Meal"
import { axiosInstance } from "./AxiosInstance"


type recipe = {
    uri: string
    dishType: string[]
    totalTime: number
    label: string
    image: string
}
export const getMeals = async (): Promise<meal[]> => {
    const {data} = await axiosInstance.get('?type=public&imageSize=REGULAR&random=true&co2EmissionsClass=A%2B')

    return data.hits.map((item: {recipe: recipe, link: unknown}) =>{
        const {recipe} = item
        return(
            {
            id: recipe.uri,
            name: recipe.label,
            categories:recipe.dishType,
            image: recipe.image,
            duration: recipe.totalTime
            }
        )
    })
}
export const getMeal = (id: string) => {
    return axiosInstance.get(`/recipes/${id}/information`)
}