import { mealDetails } from "../models/MealDetails";

export const mealsDetailedData: mealDetails[] = [
    {
        id: "1",
        name: "Hamburger",
        description: "A classic hamburger with a juicy patty, fresh lettuce, tomato, and cheese, served with crispy fries.",
        categories: ["main course"],
        rating: 4.2,
        image: "https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1600",
        duration: 30,
        instructions: [
            { index: 1, instruction: "Grill the burger patty until cooked to your preference." },
            { index: 2, instruction: "Toast the burger bun on the grill." },
            { index: 3, instruction: "Assemble the burger with lettuce, tomato, and cheese." },
            { index: 4, instruction: "Serve with a side of crispy fries." },
        ],
        ingredients: [
            { ingredient: "Burger patty", quantity: 1, unit: "piece" },
            { ingredient: "Burger bun", quantity: 1, unit: "piece" },
            { ingredient: "Lettuce", quantity: 2, unit: "leaves" },
            { ingredient: "Tomato", quantity: 1, unit: "slice" },
            { ingredient: "Cheese slice", quantity: 1, unit: "piece" },
            { ingredient: "Potato fries", quantity: 1, unit: "serving" },
        ],
        similarMeals: [
            { id: "2" }, // Reference to Pasta
            { id: "3" }, // Reference to Salad
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
            { index: 1, instruction: "Boil the pasta until it's al dente." },
            { index: 2, instruction: "In a separate pan, prepare the sauce with tomatoes and herbs." },
            { index: 3, instruction: "Toss the cooked pasta in the sauce and simmer briefly." },
            { index: 4, instruction: "Garnish with fresh herbs before serving." },
        ],
        ingredients: [
            { ingredient: "Pasta", quantity: 200, unit: "g" },
            { ingredient: "Tomatoes", quantity: 3, unit: "pieces" },
            { ingredient: "Herbs (fresh basil, oregano)", quantity: 1, unit: "tablespoon" },
            { ingredient: "Olive oil", quantity: 2, unit: "tablespoons" },
        ],
        similarMeals: [
            { id: "1" }, // Reference to Hamburger
            { id: "3" }, // Reference to Salad
        ],
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
            { index: 1, instruction: "Wash and chop the lettuce into bite-sized pieces." },
            { index: 2, instruction: "Add your favorite veggies such as carrots, cucumbers, and bell peppers." },
            { index: 3, instruction: "Prepare the vinaigrette dressing by mixing vinegar, olive oil, mustard, and honey." },
            { index: 4, instruction: "Toss the salad with the dressing just before serving." },
        ],
        ingredients: [
            { ingredient: "Lettuce", quantity: 1, unit: "head" },
            { ingredient: "Assorted veggies", quantity: 1, unit: "cup" },
            { ingredient: "Vinaigrette dressing", quantity: 2, unit: "tablespoons" },
        ],
        similarMeals: [
            { id: "1" }, // Reference to Hamburger
            { id: "2" }, // Reference to Pasta
        ],
    },
    // Add more meals with detailed instructions and ingredients.
    {
        id: "4",
        name: "Chicken Stir-Fry",
        description: "A savory chicken stir-fry with assorted vegetables, served with steamed rice.",
        categories: ["chicken", "stir-fry"],
        rating: 4.3,
        image: "https://images.pexels.com/photos/2181151/pexels-photo-2181151.jpeg?auto=compress&cs=tinysrgb&w=1600",
        duration: 40,
        instructions: [
            { index: 1, instruction: "Slice chicken breast into thin strips." },
            { index: 2, instruction: "Chop assorted vegetables like bell peppers, broccoli, and carrots." },
            { index: 3, instruction: "Stir-fry chicken and vegetables in a hot wok with a flavorful sauce." },
            { index: 4, instruction: "Serve over steamed rice." },
        ],
        ingredients: [
            { ingredient: "Chicken breast", quantity: 2, unit: "pieces" },
            { ingredient: "Assorted vegetables", quantity: 2, unit: "cups" },
            { ingredient: "Stir-fry sauce", quantity: 1, unit: "cup" },
            { ingredient: "Steamed rice", quantity: 1, unit: "cup" },
        ],
        similarMeals: [
            { id: "5" }, // Reference to Teriyaki Chicken
            { id: "6" }, // Reference to Beef and Broccoli Stir-Fry
        ],
    },
    {
        id: "5",
        name: "Teriyaki Chicken",
        description: "Tender chicken pieces glazed with sweet teriyaki sauce, served with steamed rice and vegetables.",
        categories: ["chicken", "Japanese"],
        rating: 4.5,
        image: "https://images.pexels.com/photos/11787138/pexels-photo-11787138.jpeg?auto=compress&cs=tinysrgb&w=1600",
        duration: 35,
        instructions: [
            { index: 1, instruction: "Marinate chicken in teriyaki sauce for at least 30 minutes." },
            { index: 2, instruction: "Grill or sauté chicken until fully cooked." },
            { index: 3, instruction: "Serve with steamed rice and sautéed vegetables." },
        ],
        ingredients: [
            { ingredient: "Chicken pieces", quantity: 300, unit: "g" },
            { ingredient: "Teriyaki sauce", quantity: 1, unit: "cup" },
            { ingredient: "Steamed rice", quantity: 1, unit: "cup" },
            { ingredient: "Sautéed vegetables", quantity: 1, unit: "cup" },
        ],
        similarMeals: [
            { id: "4" }, // Reference to Chicken Stir-Fry
            { id: "6" }, // Reference to Beef and Broccoli Stir-Fry
        ],
    },
    {
        id: "6",
        name: "Beef and Broccoli Stir-Fry",
        description: "Sliced beef and fresh broccoli stir-fried in a savory sauce, served over steamed rice.",
        categories: ["beef", "stir-fry"],
        rating: 4.6,
        image: "https://images.pexels.com/photos/5836623/pexels-photo-5836623.jpeg?auto=compress&cs=tinysrgb&w=1600",
        duration: 30,
        instructions: [
            { index: 1, instruction: "Slice beef into thin strips." },
            { index: 2, instruction: "Chop fresh broccoli into florets." },
            { index: 3, instruction: "Stir-fry beef and broccoli in a savory sauce until tender." },
            { index: 4, instruction: "Serve over steamed rice." },
        ],
        ingredients: [
            { ingredient: "Beef slices", quantity: 300, unit: "g" },
            { ingredient: "Broccoli", quantity: 1, unit: "cup" },
            { ingredient: "Stir-fry sauce", quantity: 1, unit: "cup" },
            { ingredient: "Steamed rice", quantity: 1, unit: "cup" },
        ],
        similarMeals: [
            { id: "4" }, // Reference to Chicken Stir-Fry
            { id: "5" }, // Reference to Teriyaki Chicken
        ],
    },
]
