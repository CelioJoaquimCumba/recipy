import { NavBar } from "../components/molecules/NavBar";
import { SearchBar } from "../components/molecules/SearchBar";
import { Categories } from "../components/organisms/categories";
import { Meals } from "../components/organisms/Meals";
import { Button } from "../components/atoms/Button";
import {category } from "../models/Category";
import { useEffect, useState } from "react";
// import { getMeals } from "../api/mealApi";
import { useNavigate } from "react-router-dom";
import { mealsData } from "../data/Meals";
import { categoriesData } from "../data/Categories";
import { TrendingCategories } from "../components/organisms/TrendingCategories";

// const popularsData = [
//     {
//         id: "kfjlasaq",
//         name: "Pizza",
//         categories: ["Lunch", "Dinner"],
//         image: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1600",
//         duration: 120,
//     },
//     {
//         id: "fdjsklaj",
//         name: "Lasagne ",
//         categories: ["Lunch", "Dinner"],
//         image: "https://images.pexels.com/photos/5864352/pexels-photo-5864352.jpeg?auto=compress&cs=tinysrgb&w=1600",
//         duration: 120,
//     },
//     {  
//         id: "flas;j",
//         name: "Pancake  ",
//         categories: ["Dessert"],
//         image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1600",
//         duration: 15,
//     },
// ]

const ListCategories:category[] = categoriesData
export const Home = () => {
    const [meals, setMeals] = useState(mealsData)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                // const data = await getMeals();
                // const popularData = await getMeals();
                // if(data)setMeals(data)
                // if(popularData)setPopularMeals(popularData)
            } catch (error) {
                setMeals(mealsData)
                console.error("Error fetching meals:", error);
            }
            setLoading(false)
        }
        fetchMeals()
    },[])

    const _initial: string[] = []
    const [ categories, setCategories ] = useState(_initial)

    const toggleCategory = ( categories: boolean[]) => {
        const newCategories:category[] = []
        for (let i = 0; i < categories.length; i++) {
            if (categories[i]) {
                newCategories.push(ListCategories[i])
            }
        }
        setCategories(newCategories)
    }
    const handleSearch = (input:string):boolean => {
        navigate(`/menu${input && "?q="+input}`)
        return true
    }
    return (
        <div className=" h-full w-full flex px-4 pb-2 pb4 flex-col bg-gray-100">
            { loading ? 
                <div className="flex flex-col items-center justify-center h-full w-full">
                    <span className="relative flex   justify-center items-center">
                        <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-8 w-8 bg-orange-500"></span>
                    </span>
                    <p className="text-2xl leading-6 font-semibold text-orange-500">Loading</p>

                </div>
             :
             <>
                <NavBar/>
                {/* body */}
                <div className="flex py-4 flex-col items-start gap-4 flex-grow self-stretch ">
                    {/* header */}
                    <div className="flex flex-col items-start gap-2 self-stretch">
                        <h1 className="text-base leading-5 font-normal text-center text-orange-600">Good morning</h1>
                        <p className="text-gray-700 text-base leading-6 font-normal w-1/2">What would you like to cook today?</p>
                        <SearchBar onSearch={handleSearch}/>
                    </div>
                    {/* meals by categories */}
                    <div className="flex flex-col gap-4 items-start self-stretch ">
                        <Categories categories={ListCategories} addSelectedCategory={toggleCategory} />
                        <Meals meals={meals.filter(meal => {
                                return meal.categories  && meal.categories.some(category => categories.includes(category)) || categories.length === 0
                            })}/>
                    </div>
                    {/* popular meals title */}
                    <div className="flex items-start gap-2 self-stretch justify-between">
                        <h1 className="text-base leading-6 font-semibold text-gray-700">Trending categories</h1>
                        <a href="./menu" className="text-base leading-6 font-light text-orange-600"> see all</a>
                    </div>
                    {/* popular meals */}
                    <TrendingCategories/>
                    {/* something new */}
                    <div className="flex items-start gap-2 self-stretch flex-col">
                        <h1 className="text-base leading-6 font-semibold text-gray-700">Something new</h1>
                        <div className="flex p-2 justify-center items-center gap-2 flex-grow self-stretch rounded-2xl bg-white">
                            <span className="text-base leading-6 font-medium text-gray-500">
                                We have alot of recomendations for you!
                            </span>
                            <Button onClick={() => navigate("./menu")}/>
                        </div>
                    </div>
                </div>
             </>
             }
        </div>
    );
};