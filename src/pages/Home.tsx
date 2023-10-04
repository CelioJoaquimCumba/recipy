import { NavBar } from "../components/molecules/NavBar";
import { SearchBar } from "../components/molecules/SearchBar";
import { Pills } from "../components/organisms/Pills";
import { Meals } from "../components/organisms/Meals";
import { Button } from "../components/atoms/Button";
const meals = [
    {
        name: "Hamburger",
        categories: ["Lunch"],
        image: "https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1600",
        duration: 30,
    },
    {
        name: "Pasta",
        categories: ["Lunch","Dinner"],
        image: "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: 60,
    },
    {
        name: "Salad",
        categories: ["Lunch","Dinner","Diet"],
        image: "https://images.pexels.com/photos/4958950/pexels-photo-4958950.jpeg?auto=compress&cs=tinysrgb&w=1600",
        duration: 15,
    }
]
const popularMeals = [
    {
        name: "Pizza",
        categories: ["Lunch", "Dinner"],
        image: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1600",
        duration: 120,
    },
    {
        name: "Lasagne ",
        categories: ["Lunch", "Dinner"],
        image: "https://images.pexels.com/photos/5864352/pexels-photo-5864352.jpeg?auto=compress&cs=tinysrgb&w=1600",
        duration: 120,
    },
    {
        name: "Pancake  ",
        categories: ["Dessert"],
        image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1600",
        duration: 15,
    },
]
export const Home = () => {
    return (
        <div className=" h-screen w-screen flex px-4 pt-2 pb4 flex-col bg-gray-100">
            <NavBar/>
            {/* body */}
            <div className="flex py-4 flex-col items-start gap-4 flex-grow self-stretch">
                {/* header */}
                <div className="flex flex-col items-start gap-2 self-stretch">
                    <h1 className="text-sm leading-5 font-light text-center text-orange-600">Good morning</h1>
                    <p className="text-gray-700 text-base leading-6 font-normal w-1/2">What would you like to cook today?</p>
                    <SearchBar/>
                </div>
                {/* meals by categories */}
                <div className="flex flex-col gap-4 items-start self-stretch">
                    <Pills/>
                    <Meals meals={meals}/>
                </div>
                {/* popular meals title */}
                <div className="flex items-start gap-2 self-stretch justify-between">
                    <h1 className="text-base leading-6 font-semibold text-gray-700">Popular meals</h1>
                    <a href="./menu" className="text-base leading-6 font-light text-orange-600"> see all</a>

                </div>
                {/* popular meals */}
                <Meals meals={popularMeals}/>
                {/* something new */}
                <div className="flex items-start gap-2 self-stretch flex-col">
                    <h1 className="text-base leading-6 font-semibold text-gray-700">Something new</h1>
                    <div className="flex p-2 justify-center items-center gap-2 flex-grow self-stretch rounded-2xl bg-gray-200">
                        <span className="text-base leading-6 font-medium text-gray-500">
                            We have alot of recomendations for you!
                        </span>
                        <Button/>

                    </div>
                </div>

            </div>
        </div>
    );
};