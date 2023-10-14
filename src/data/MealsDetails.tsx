import { mealDetails } from "../models/MealDetails";

export const mealsDetailedData: mealDetails[] = [
    {
    id: "1",
    name: "Hamburger",
    description: "A classic hamburger with a juicy patty, fresh lettuce, tomato, and cheese, served with crispy fries.",
    categories: ["main course", "lunch"],
    rating: 4.2,
    image: "https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1600",
    duration: 30,
    instructions: [
        { index: 1, instruction: "Preheat your grill or stovetop skillet to medium-high heat." },
        { index: 2, instruction: "While the grill is heating, season the burger patty with salt and pepper to taste." },
        { index: 3, instruction: "Place the seasoned patty on the grill and cook for about 3-4 minutes on each side for medium-rare or longer for your preferred doneness." },
        { index: 4, instruction: "While the patty is cooking, cut the burger bun in half, and place the cut sides on the grill to toast until they're lightly golden brown." },
        { index: 5, instruction: "Once the burger patty is cooked to your liking, place the cheese slice on top of it, and let it melt for a minute." },
        { index: 6, instruction: "Assemble your burger in this order: bottom bun, lettuce, tomato, burger patty with melted cheese, pickles, onion (if using), ketchup, and mustard." },
        { index: 7, instruction: "Top with the other half of the toasted bun." },
        { index: 8, instruction: "Serve with a side of crispy potato fries." },
    ],
    ingredients: [
        { ingredient: "Burger patty", quantity: 1, unit: "piece" },
        { ingredient: "Burger bun", quantity: 1, unit: "piece" },
        { ingredient: "Lettuce", quantity: 2, unit: "leaves" },
        { ingredient: "Tomato", quantity: 1, unit: "slice" },
        { ingredient: "Cheese slice", quantity: 1, unit: "piece" },
        { ingredient: "Potato fries", quantity: 1, unit: "serving" },
        { ingredient: "Ketchup"},
        { ingredient: "Mustard"},
        { ingredient: "Pickles", quantity: 2, unit: "slices" },
        { ingredient: "Onion", quantity: 1, unit: "slice (optional)" },
    ],
    similarMeals: [
        { id: "2" }, // Reference to Pasta
        { id: "3" }, // Reference to Salad
    ],
    },
    {
        id: "2",
        name: "Pasta, Lunch",
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
        categories: ["salad", "Diet"],
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
    {
    id: "7",
    name: "Margherita Pizza",
    description: "A classic Margherita pizza with a thin, crispy crust, fresh tomatoes, mozzarella cheese, and basil leaves.",
    categories: ["pizza", "Italian"],
    rating: 4.7,
    image: "https://images.pexels.com/photos/14391207/pexels-photo-14391207.jpeg?auto=compress&cs=tinysrgb&w=1600",
    duration: 25,
    instructions: [
        { index: 1, instruction: "Roll out the pizza dough into a thin crust." },
        { index: 2, instruction: "Spread tomato sauce, mozzarella cheese, and sliced tomatoes on the dough." },
        { index: 3, instruction: "Bake until the crust is golden and the cheese is bubbly." },
        { index: 4, instruction: "Garnish with fresh basil leaves before serving." },
    ],
    ingredients: [
        { ingredient: "Pizza dough", quantity: 1, unit: "ball" },
        { ingredient: "Tomato sauce", quantity: 1/2, unit: "cup" },
        { ingredient: "Mozzarella cheese", quantity: 1, unit: "cup" },
        { ingredient: "Tomatoes", quantity: 2, unit: "slices" },
        { ingredient: "Fresh basil leaves", quantity: 1, unit: "handful" },
    ],
    similarMeals: [
        { id: "8" }, // Reference to Pepperoni Pizza
        { id: "9" }, // Reference to Veggie Pizza
    ],
    },
    {
        id: "8",
        name: "Pepperoni Pizza",
        description: "A delicious Pepperoni pizza with a crispy crust, zesty tomato sauce, plenty of mozzarella cheese, and pepperoni slices.",
        categories: ["pizza", "Italian"],
        rating: 4.6,
        image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1600",
        duration: 30,
        instructions: [
            { index: 1, instruction: "Roll out the pizza dough into a thin crust." },
            { index: 2, instruction: "Spread tomato sauce, mozzarella cheese, and pepperoni slices on the dough." },
            { index: 3, instruction: "Bake until the crust is golden and the cheese is bubbly." },
        ],
        ingredients: [
            { ingredient: "Pizza dough", quantity: 1, unit: "ball" },
            { ingredient: "Tomato sauce", quantity: 1/2, unit: "cup" },
            { ingredient: "Mozzarella cheese", quantity: 1, unit: "cup" },
            { ingredient: "Pepperoni slices", quantity: 10, unit: "slices" },
        ],
        similarMeals: [
            { id: "7" }, // Reference to Margherita Pizza
            { id: "9" }, // Reference to Veggie Pizza
        ],
    },
    {
        id: "9",
        name: "Veggie Pizza",
        description: "A colorful Veggie pizza with a crispy crust, tomato sauce, mozzarella cheese, and a variety of fresh vegetables.",
        categories: ["pizza", "Italian"],
        rating: 4.4,
        image: "https://images.pexels.com/photos/845808/pexels-photo-845808.jpeg?auto=compress&cs=tinysrgb&w=1600",
        duration: 30,
        instructions: [
            { index: 1, instruction: "Roll out the pizza dough into a thin crust." },
            { index: 2, instruction: "Spread tomato sauce, mozzarella cheese, and assorted veggies on the dough." },
            { index: 3, instruction: "Bake until the crust is golden and the cheese is bubbly." },
        ],
        ingredients: [
            { ingredient: "Pizza dough", quantity: 1, unit: "ball" },
            { ingredient: "Tomato sauce", quantity: 1/2, unit: "cup" },
            { ingredient: "Mozzarella cheese", quantity: 1, unit: "cup" },
            { ingredient: "Assorted veggies", quantity: 1, unit: "cup" },
        ],
        similarMeals: [
            { id: "7" }, // Reference to Margherita Pizza
            { id: "8" }, // Reference to Pepperoni Pizza
        ],
    },
    {
        id: "10",
        name: "Miso Soup",
        description: "A traditional Japanese miso soup with tofu, seaweed, and green onions, served as an appetizer.",
        categories: ["soup", "Japanese"],
        rating: 4.3,
        image: "https://images.pexels.com/photos/7474160/pexels-photo-7474160.jpeg?auto=compress&cs=tinysrgb&w=1600",
        duration: 15,
        instructions: [
            { index: 1, instruction: "Boil water and add miso paste for the broth." },
            { index: 2, instruction: "Add tofu cubes, seaweed, and green onions." },
            { index: 3, instruction: "Simmer until ingredients are tender." },
            { index: 4, instruction: "Serve hot as an appetizer." },
        ],
        ingredients: [
            { ingredient: "Miso paste", quantity: 2, unit: "tablespoons" },
            { ingredient: "Tofu", quantity: 100, unit: "g" },
            { ingredient: "Seaweed", quantity: 1, unit: "sheet" },
            { ingredient: "Green onions", quantity: 2, unit: "stalks" },
        ],
        similarMeals: [
            { id: "11" }, // Reference to Sushi
            { id: "12" }, // Reference to Ramen
        ],
    },
    {
        id: "11",
        name: "Sushi",
        description: "A selection of fresh sushi rolls with various fillings, served with soy sauce and pickled ginger.",
        categories: ["Japanese", "sushi"],
        rating: 4.7,
        image: "https://images.pexels.com/photos/7245465/pexels-photo-7245465.jpeg?auto=compress&cs=tinysrgb&w=1600",
        duration: 45,
        instructions: [
            { index: 1, instruction: "Prepare sushi rice and nori sheets." },
            { index: 2, instruction: "Lay out the ingredients like fish, avocado, and cucumber." },
            { index: 3, instruction: "Roll the sushi using a bamboo mat and cut into bite-sized pieces." },
            { index: 4, instruction: "Serve with soy sauce and pickled ginger." },
        ],
        ingredients: [
            { ingredient: "Sushi rice", quantity: 1, unit: "cup" },
            { ingredient: "Nori sheets", quantity: 5, unit: "sheets" },
            { ingredient: "Assorted fillings", quantity: 1, unit: "cup" },
            { ingredient: "Soy sauce", quantity: 1, unit: "tablespoon" },
            { ingredient: "Pickled ginger", quantity: 1, unit: "tablespoon" },
        ],
        similarMeals: [
            { id: "10" }, // Reference to Miso Soup
            { id: "12" }, // Reference to Ramen
        ],
    },
    {
        id: "12",
        name: "Ramen",
        description: "A steaming bowl of Japanese ramen with tender noodles, savory broth, and a variety of toppings.",
        categories: ["soup", "Japanese"],
        rating: 4.5,
        image: "https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=1600",
        duration: 40,
        instructions: [
            { index: 1, instruction: "Boil the ramen noodles until al dente." },
            { index: 2, instruction: "Prepare the broth with miso, soy sauce, and stock." },
            { index: 3, instruction: "Add toppings like sliced pork, eggs, and green onions." },
            { index: 4, instruction: "Serve hot and enjoy." },
        ],
        ingredients: [
            { ingredient: "Ramen noodles", quantity: 200, unit: "g" },
            { ingredient: "Miso paste", quantity: 2, unit: "tablespoons" },
            { ingredient: "Soy sauce", quantity: 1, unit: "tablespoon" },
            { ingredient: "Pork slices", quantity: 100, unit: "g" },
            { ingredient: "Eggs", quantity: 2, unit: "pieces" },
        ],
        similarMeals: [
            { id: "10" }, // Reference to Miso Soup
            { id: "11" }, // Reference to Sushi
        ],
    },
    {
        id: "13",
        name: "Grilled Salmon",
        description: "A perfectly grilled salmon fillet with a lemon dill sauce, served with steamed asparagus and quinoa.",
        categories: ["seafood", "grilled"],
        rating: 4.6,
        image: "https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg?auto=compress&cs=tinysrgb&w=1600",
        duration: 35,
        instructions: [
            { index: 1, instruction: "Season the salmon fillet and grill to perfection." },
            { index: 2, instruction: "Prepare a lemon dill sauce to drizzle over the salmon." },
            { index: 3, instruction: "Serve with steamed asparagus and quinoa." },
        ],
        ingredients: [
            { ingredient: "Salmon fillet", quantity: 1, unit: "piece" },
            { ingredient: "Lemon", quantity: 1, unit: "piece" },
            { ingredient: "Dill", quantity: 1, unit: "tablespoon" },
            { ingredient: "Asparagus", quantity: 1, unit: "bunch" },
            { ingredient: "Quinoa", quantity: 1, unit: "cup" },
        ],
        similarMeals: [
            { id: "14" }, // Reference to Grilled Shrimp
            { id: "15" }, // Reference to Baked Cod
        ],
    },
    {
        id: "14",
        name: "Grilled Shrimp",
        description: "Juicy grilled shrimp skewers with a spicy garlic marinade, served with a side of couscous and roasted vegetables.",
        categories: ["seafood", "grilled"],
        rating: 4.4,
        image: "https://images.pexels.com/photos/6270541/pexels-photo-6270541.jpeg?auto=compress&cs=tinysrgb&w=1600",
        duration: 30,
        instructions: [
            { index: 1, instruction: "Marinate the shrimp in a spicy garlic marinade." },
            { index: 2, instruction: "Thread the shrimp onto skewers and grill until cooked." },
            { index: 3, instruction: "Serve with couscous and roasted vegetables." },
        ],
        ingredients: [
            { ingredient: "Shrimp", quantity: 200, unit: "g" },
            { ingredient: "Garlic marinade", quantity: 2, unit: "tablespoons" },
            { ingredient: "Couscous", quantity: 1, unit: "cup" },
            { ingredient: "Roasted vegetables", quantity: 1, unit: "cup" },
        ],
        similarMeals: [
            { id: "13" }, // Reference to Grilled Salmon
            { id: "15" }, // Reference to Baked Cod
        ],
    },
    {
        id: "15",
        name: "Baked Cod",
        description: "Oven-baked cod fillet with a lemon herb crust, served with a side of roasted potatoes and green beans.",
        categories: ["seafood", "baked"],
        rating: 4.5,
        image: "https://healthyrecipesblogs.com/wp-content/uploads/2014/01/baked-cod-featured-2021.jpg",
        duration: 40,
        instructions: [
            { index: 1, instruction: "Coat the cod fillet with a lemon herb crust." },
            { index: 2, instruction: "Bake in the oven until the crust is golden and the fish flakes easily." },
            { index: 3, instruction: "Serve with roasted potatoes and green beans." },
        ],
        ingredients: [
            { ingredient: "Cod fillet", quantity: 1, unit: "piece" },
            { ingredient: "Lemon zest", quantity: 1, unit: "tablespoon" },
            { ingredient: "Herbs (e.g., parsley, thyme)", quantity: 1, unit: "tablespoon" },
            { ingredient: "Potatoes", quantity: 1, unit: "cup" },
            { ingredient: "Green beans", quantity: 1, unit: "cup" },
        ],
        similarMeals: [
            { id: "13" }, // Reference to Grilled Salmon
            { id: "14" }, // Reference to Grilled Shrimp
        ],
    },
    {
        id: "16",
        name: "Caprese Salad",
        description: "A refreshing Caprese salad with ripe tomatoes, fresh mozzarella, basil leaves, and balsamic glaze.",
        categories: ["salad", "Italian", "diet"],
        rating: 4.6,
        image: "https://images.pexels.com/photos/13241857/pexels-photo-13241857.jpeg?auto=compress&cs=tinysrgb&w=1600",
        duration: 10,
        instructions: [
            { index: 1, instruction: "Slice tomatoes and fresh mozzarella cheese." },
            { index: 2, instruction: "Arrange them on a plate with fresh basil leaves." },
            { index: 3, instruction: "Drizzle with balsamic glaze and olive oil." },
            { index: 4, instruction: "Season with salt and pepper and serve." },
        ],
        ingredients: [
            { ingredient: "Tomatoes", quantity: 2, unit: "slices" },
            { ingredient: "Fresh mozzarella", quantity: 2, unit: "slices" },
            { ingredient: "Basil leaves", quantity: 4, unit: "leaves" },
            { ingredient: "Balsamic glaze", quantity: 1, unit: "tablespoon" },
            { ingredient: "Olive oil", quantity: 1, unit: "tablespoon" },
        ],
        similarMeals: [
            { id: "17" }, // Reference to Greek Salad
            { id: "18" }, // Reference to Caesar Salad
        ],
    },
    {
        id: "17",
        name: "Greek Salad",
        description: "A classic Greek salad with ripe tomatoes, cucumbers, Kalamata olives, feta cheese, and a Greek vinaigrette dressing.",
        categories: ["salad", "Greek", "Diet"],
        rating: 4.5,
        image: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1600",
        duration: 15,
        instructions: [
            { index: 1, instruction: "Chop tomatoes, cucumbers, and red onions." },
            { index: 2, instruction: "Add Kalamata olives and crumbled feta cheese." },
            { index: 3, instruction: "Drizzle with Greek vinaigrette dressing and toss to combine." },
            { index: 4, instruction: "Serve chilled." },
        ],
        ingredients: [
            { ingredient: "Tomatoes", quantity: 1, unit: "cup" },
            { ingredient: "Cucumbers", quantity: 1, unit: "cup" },
            { ingredient: "Kalamata olives", quantity: 1, unit: "cup" },
            { ingredient: "Feta cheese", quantity: 1, unit: "cup" },
            { ingredient: "Greek vinaigrette dressing", quantity: 2, unit: "tablespoons" },
        ],
        similarMeals: [
            { id: "16" }, // Reference to Caprese Salad
            { id: "18" }, // Reference to Caesar Salad
        ],
    },
    {
    id: "18",
    name: "Caesar Salad",
    description: "A classic Caesar salad with crisp romaine lettuce, croutons, parmesan cheese, and creamy Caesar dressing.",
    categories: ["Salad", "Diet"],
    rating: 4.4,
    image: "https://images.pexels.com/photos/6107787/pexels-photo-6107787.jpeg?auto=compress&cs=tinysrgb&w=1600",
    duration: 20,
    instructions: [
        { index: 1, instruction: "Tear the romaine lettuce into bite-sized pieces." },
        { index: 2, instruction: "Add croutons and grated parmesan cheese." },
        { index: 3, instruction: "Drizzle with creamy Caesar dressing and toss to coat." },
        { index: 4, instruction: "Serve as a side or add grilled chicken for a main course." },
    ],
    ingredients: [
        { ingredient: "Romaine lettuce", quantity: 1, unit: "head" },
        { ingredient: "Croutons", quantity: 1, unit: "cup" },
        { ingredient: "Parmesan cheese", quantity: 1, unit: "cup" },
        { ingredient: "Caesar dressing", quantity: 2, unit: "tablespoons" },
    ],
    similarMeals: [
        { id: "16" }, // Reference to Caprese Salad
        { id: "17" }, // Reference to Greek Salad
    ],
    },
    {
        id: "19",
        name: "Keto Avocado Salad",
        description: "A low-carb, keto-friendly avocado salad with mixed greens, avocado slices, bacon, and a creamy ranch dressing.",
        categories: ["salad", "diet"],
        rating: 4.2,
        image: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1600",
        duration: 15,
        instructions: [
            { index: 1, instruction: "Toss mixed greens in a bowl." },
            { index: 2, instruction: "Add avocado slices and crispy bacon bits." },
            { index: 3, instruction: "Drizzle with creamy ranch dressing." },
            { index: 4, instruction: "Enjoy your keto-friendly salad." },
        ],
        ingredients: [
            { ingredient: "Mixed greens", quantity: 2, unit: "cups" },
            { ingredient: "Avocado", quantity: 1, unit: "sliced" },
            { ingredient: "Bacon bits", quantity: 2, unit: "tablespoons" },
            { ingredient: "Creamy ranch dressing", quantity: 2, unit: "tablespoons" },
        ],
        similarMeals: [
            { id: "17" }, // Reference to Greek Salad
            { id: "18" }, // Reference to Caesar Salad
        ],
    },

    {
        id: "20",
        name: "Chocolate Lava Cake",
        description: "A decadent chocolate lava cake with a gooey, molten chocolate center, served with a scoop of vanilla ice cream.",
        categories: ["Dessert"],
        rating: 4.8,
        image: "https://images.pexels.com/photos/5946037/pexels-photo-5946037.jpeg?auto=compress&cs=tinysrgb&w=1600",
        duration: 25,
        instructions: [
            { index: 1, instruction: "Prepare a chocolate cake batter." },
            { index: 2, instruction: "Fill ramekins with the batter and insert a piece of chocolate in the center." },
            { index: 3, instruction: "Bake until the edges are set, but the center is gooey." },
            { index: 4, instruction: "Serve with a scoop of vanilla ice cream." },
        ],
        ingredients: [
            { ingredient: "Chocolate cake batter", quantity: 1, unit: "portion" },
            { ingredient: "Chocolate pieces", quantity: 1, unit: "piece" },
            { ingredient: "Vanilla ice cream", quantity: 1, unit: "scoop" },
        ],
        similarMeals: [
            { id: "16" }, // Reference to Caprese Salad
            { id: "18" }, // Reference to Caesar Salad
        ],
    },

    {
        id: "21",
        name: "Classic Pancakes",
        description: "Fluffy and classic pancakes served with maple syrup and a pat of butter.",
        categories: ["breakfast"],
        rating: 4.7,
        image: "https://images.pexels.com/photos/574111/pexels-photo-574111.jpeg?auto=compress&cs=tinysrgb&w=1600",
        duration: 20,
        instructions: [
            { index: 1, instruction: "Prepare pancake batter." },
            { index: 2, instruction: "Heat a griddle and pour the batter to make fluffy pancakes." },
            { index: 3, instruction: "Serve with maple syrup and butter." },
        ],
        ingredients: [
            { ingredient: "Pancake batter", quantity: 1, unit: "portion" },
            { ingredient: "Maple syrup", quantity: 2, unit: "tablespoons" },
            { ingredient: "Butter", quantity: 1, unit: "pat" },
        ],
        similarMeals: [
            { id: "19" }, // Reference to Keto Avocado Salad
            { id: "20" }, // Reference to Chocolate Lava Cake
        ],
    }

]
