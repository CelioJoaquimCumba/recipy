import { axiosInstance } from "./AxiosInstance"

export const getMeals = () => {
    return axiosInstance.get('/recipes/complexSearch')
}
export const getMeal = (id: string) => {
    return axiosInstance.get(`/recipes/${id}/information`)
}