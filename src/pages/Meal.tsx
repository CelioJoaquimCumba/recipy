import { Pill } from "../components/atoms/Pill";
import { Instructions } from "../components/organisms/Instructions";
import { NavBar } from "../components/molecules/NavBar";
import { Ingredients } from "../components/organisms/Ingredients";
import { Meals } from "../components/organisms/Meals";
import { useParams } from "react-router-dom";
import { getMealById } from "../utils/getMealById";
import { mealsData } from "../data/MealsDetails";



// const similarMeals:meal[ ] = [
//     {
//         id: "asdklfj",
//         name: "Cheeseburger",
//         categories: ["Lunch"],
//         image: "https://www.pexels.com/photo/ham-burger-with-vegetables-1639557/",
//         duration: 30,
//     },
//     {
//         id: "jasdflk",
//         name: "Veggie Burger",
//         categories: ["Lunch", "Vegetarian"],
//         image: "https://images.pexels.com/photos/761685/pexels-photo-761685.jpeg?auto=compress&cs=tinysrgb&w=1600",
//         duration: 25,
//     },
//     {
//         id: "fjdkals",
//         name: "Chicken Burger",
//         categories: ["Lunch", "Dinner"],
//         image: "https://images.pexels.com/photos/35488/burger-food-hamburger-fast-food-35488.jpeg?auto=compress&cs=tinysrgb&w=1600",
//         duration: 35,
//     }
// ];

// const instructions: instruction[] = [
//     {
//         index: 1,
//         instruction: "Start by preheating your grill or stovetop pan to medium-high heat."
//     },
//     {
//         index: 2,
//         instruction: "While the grill is heating up, prepare the hamburger patties. Season them with salt and pepper on both sides."
//     },
//     {
//         index: 3,
//         instruction: "Once the grill or pan is hot, place the hamburger patties on it and cook for about 3-4 minutes per side for a medium-rare burger. Adjust the cooking time to your preferred level of doneness."
//     },
//     {
//         index: 4,
//         instruction: "While the patties are cooking, slice the hamburger buns in half and lightly toast them on the grill or in a toaster until they're golden brown."
//     },
//     {
//         index: 5,
//         instruction: "When the patties are almost done, add a slice of cheese on top of each patty and let it melt."
//     },
//     {
//         index: 6,
//         instruction: "Remove the patties from the grill or pan and place them on a plate."
//     },
//     {
//         index: 7,
//         instruction: "To assemble the burgers, start with the bottom half of the toasted bun. Add a lettuce leaf, followed by a slice of tomato and a couple of onion rings."
//     },
//     {
//         index: 8,
//         instruction: "Place the cheese-covered patty on top of the veggies and add condiments like ketchup and mustard to your liking."
//     },
//     {
//         index: 9,
//         instruction: "Finish by placing the top half of the bun on the condiments to complete the burger."
//     },
//     {
//         index: 10,
//         instruction: "Serve your delicious homemade burger with your favorite side dishes and enjoy!"
//     }
// ];
// const ingredients:ingredient[] = [
//     {
//         ingredient: "Ground Beef",
//         quantity: 1,
//         unit: "patty"
//     },
//     {
//         ingredient: "Hamburger Bun",
//         quantity: 1,
//         unit: "piece"
//     },
//     {
//         ingredient: "Lettuce",
//         quantity: 2,
//         unit: "leaves"
//     },
//     {
//         ingredient: "Tomato",
//         quantity: 2,
//         unit: "slices"
//     },
//     {
//         ingredient: "Cheese",
//         quantity: 1,
//         unit: "slice"
//     },
//     {
//         ingredient: "Onion",
//         quantity: 2,
//         unit: "rings"
//     },
//     {
//         ingredient: "Ketchup",
//         quantity: 1,
//         unit: "tablespoon"
//     },
//     {
//         ingredient: "Mustard",
//         quantity: 1,
//         unit: "tablespoon"
//     },
//     {
//         ingredient: "Salt",
//         quantity: 1,
//         unit: "pinch"
//     },
//     {
//         ingredient: "Black Pepper",
//         quantity: 1,
//         unit: "pinch"
//     }
// ];


//     useEffect(() => {
//     const fetchMeals = async () => {
//         try {
//             const data = await getMeals();
//             setMeal(data)
//             console.log(data);
//         } catch (error) {
//             console.error("Error fetching meals:", error);
//         }
//     };

//     fetchMeals();
// }, []);
export const Meal = () => {
    const mealId = useParams().id
    let meal
    if (mealId){
        meal = getMealById(mealId, mealsData)
    }
    if(meal){
        return (
            <div className="flex flex-col items-start w-screen h-full p-4 pt-2 bg-gray-100">
                <NavBar back={true}/>
                {/* body */}
                <div className="flex py-4 flex-col gap-4 flex-grow self-stretch">
                    <img className=" h-64 w-full object-cover rounded-md self-stretch" src={meal.image} alt="food image" />
                    {/* rating and categories */}
                    <div className="flex justify-between items-center self-stretch">
                        <div className="flex gap-2 overflow-x-auto">
                            {meal.categories && meal.categories.map((category: string) => {
                                return (
                                    <Pill  active={true} category={category} onClick={() => {} }/>
                                )
                            })}
                        </div>
                        {/* rating */}
                        <div className="flex justify-end items-center gap-2">
                            <span className=" text-base leading-6 font-normal text-orange-600 text-center">
                                4.5
                            </span>
                                <svg className="w-4 h-4 text-orange-600 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                        </div>
                    </div>
                    {/* basic information */}
                    <div className="flex flex-col items-start gap-2 self-stretch">
                        <h1 className="text-base leading-6 font-semibold text-gray-700">{meal.name}</h1>
                        <p className="text-gray-500 text-base leading-5 font-light self-stretch">
                            {meal.description}
                        </p>
                    </div>
                    {/* Ingredients */}
                    <div className="flex flex-col items-start gap-4 self-stretch">
                        <h1 className="text-gray-700 text-base leading-6 font-semibold">Ingredients</h1>
                        <Ingredients ingredients={meal.ingredients} />
                    </div>
                    <div className="flex flex-col items-start gap-2 self-stretch">
                        <h1 className="text-gray-700 text-base leading-6 font-semibold">Instructions</h1>
                        <Instructions instructions={meal.instructions} />
                    </div>
                    {/* Similar Meals */}
                    {meal.similarMeals && meal.similarMeals.length > 0 && 
                    <div className="flex flex-col items-start gap-4 self-stretch">
                        <h1 className="text-gray-700 text-base leading-6 font-semibold">Similar Meals</h1>
                        <Meals meals={meal.similarMeals}/>
                    </div>
                    }
                </div>
            </div>
        );
    }
    return(
        <div>Not found</div>
    )
}