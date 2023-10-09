import { meal } from "../models/Meal";

export const mealsData: meal[] = [
    {
        id: "1",
        name: "Hamburger",
        categories: ["main course"],
        image: "https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1600",
        duration: 30,
    },
    {
        id: "2",
        name: "Pasta",
        categories: ["pasta", "main course"],
        image: "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: 60,
    },
    {
        id: "3",
        name: "Salad",
        categories: ["salad"],
        image: "https://images.pexels.com/photos/4958950/pexels-photo-4958950.jpeg?auto=compress&cs=tinysrgb&w=1600",
        duration: 15,
    }
]