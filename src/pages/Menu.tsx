import { useLocation } from "react-router-dom"
import { NavBar } from "../components/molecules/NavBar";
import { SearchBar } from "../components/molecules/SearchBar";
import { Tag } from "../components/atoms/Tag";
import { useState } from "react";
import { mealsData } from "../data/Meals";
import { Meal } from "../components/molecules/Meal";
import { getSearchMeals } from "../utils/getSearchedMeals";
import { Alert } from "../components/atoms/Alert";

export const Menu = () => {
    // Access query parameters from the location object
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const q = queryParams.get('q');
    const [tags, setTags] = useState(q?q.split(" "):[])
    const [meals, setMeals] = useState(tags.length>0 ?getSearchMeals(tags) : [])
  const handleClick = (tag: string) => {
    const newTags = tags.filter(t => t !== tag)
    setTags(newTags)
    newTags.length>0 ? setMeals(getSearchMeals(newTags)) : setMeals([])
  }
  const handleSearch = (input: string):boolean => {
    setTags((tags)=>{
        const newTags = input.split(" ");
        return newTags.length>0 ? [...new Set([...tags, ...newTags])] : [...tags];
    })
    const updatedTags = input.split(" ");
    setMeals(getSearchMeals(updatedTags))
    return true
  }
    return (
        <div className="flex p-4 pt-2 h-100 min-h-screen w-screen flex-col items-start bg-gray-100">
            <NavBar />
            {/* body */}
            <div className="flex py-4 flex-col gap-4 flex-grow self-stretch items-start">
                {/* header */}
                <div className="flex flex-col items-start gap-2 self-stretch">
                    <SearchBar onSearch={handleSearch}/>
                    {/* tags */}
                    <div className="flex flex-start gap-2 self-stretch overflow-auto">
                        {tags.map(tag => tag && <Tag key={tag} onClick={handleClick} tag={tag}/>)}
                    </div>
                </div>
                {/* meals */}
                <div className="flex items-start gap-2 self-stretch flex-col">
                    { meals.length === 0 && tags.length !== 0 && <Alert title="No meals found"/>}
                    {meals.length !== 0 ?
                        <div className="flex items-start gap-2 self-stretch flex-wrap">
                            {meals.map(meal => {
                                return (
                                    <Meal  {...meal} key={meal.id}/>
                                )
                            })}
                        </div>
                    :
                    <div className="flex flex-col gap-4">
                            <h1 className="text-base leading-6 font-semibold text-gray-700">Menu</h1>
                            <div className="flex items-start gap-2 self-stretch flex-wrap">
                                {mealsData.map(meal => {
                                    return (
                                        <Meal  {...meal} key={meal.id}/>
                                    )
                                })} 
                            </div>
                        </div>

                    }
                </div>
            </div>
        </div>
    );
}