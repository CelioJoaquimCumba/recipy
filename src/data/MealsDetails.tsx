import { mealDetails } from "../models/MealDetails";

export const mealsData: mealDetails[] = [
    {
        id: "1",
        name: "Hamburger",
        description: "A classic hamburger with a juicy patty, fresh lettuce, tomato, and cheese, served with crispy fries.",
        categories: ["main course"],
        rating: 4.2,
        image: "https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1600",
        duration: 30,
        instructions: [
            { index: 1, instruction: "Grill the burger patty" },
            { index: 2, instruction: "Assemble the burger with lettuce, tomato, and cheese" },
            { index: 3, instruction: "Serve with fries" },
        ],
        ingredients: [
            { ingredient: "Burger patty", quantity: 1, unit: "piece" },
            { ingredient: "Lettuce", quantity: 2, unit: "leaves" },
            { ingredient: "Tomato", quantity: 1, unit: "slice" },
            { ingredient: "Cheese", quantity: 1, unit: "slice" },
        ],
        similarMeals: [
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
        ],
    },
    {
        id: "2",
        name: "Pasta",
        description: "Delicious pasta dish made with perfectly cooked pasta, a rich tomato sauce, and a hint of herbs.",
        categories: ["main course", "pasta"],
        rating: 4.5,
        image: "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: 60,
        instructions: [
            { index: 1, instruction: "Boil the pasta" },
            { index: 2, instruction: "Prepare the sauce with tomatoes and herbs" },
            { index: 3, instruction: "Toss the pasta in the sauce" },
        ],
        ingredients: [
            { ingredient: "Pasta", quantity: 200, unit: "g" },
            { ingredient: "Tomatoes", quantity: 3, unit: "pieces" },
            { ingredient: "Herbs", quantity: 1, unit: "tablespoon" },
        ],
        similarMeals: [],
    },
    {
        id: "3",
        name: "Salad",
        description: "A fresh and healthy salad with crisp lettuce, your choice of veggies, and a tangy vinaigrette dressing.",
        categories: ["salad"],
        rating: 4.0,
        image: "https://images.pexels.com/photos/4958950/pexels-photo-4958950.jpeg?auto=compress&cs=tinysrgb&w=1600",
        duration: 15,
        instructions: [
            { index: 1, instruction: "Wash and chop the lettuce" },
            { index: 2, instruction: "Add your favorite veggies" },
            { index: 3, instruction: "Dress with vinaigrette" },
        ],
        ingredients: [
            { ingredient: "Lettuce", quantity: 1, unit: "head" },
            { ingredient: "Veggies", quantity: 1, unit: "cup" },
            { ingredient: "Vinaigrette", quantity: 2, unit: "tablespoons" },
        ],
        similarMeals: [],
    },
];
