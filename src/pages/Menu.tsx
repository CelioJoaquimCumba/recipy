import { useLocation } from "react-router-dom"
import { NavBar } from "../components/molecules/NavBar";
import { SearchBar } from "../components/molecules/SearchBar";
import { Tag } from "../components/atoms/Tag";
import { useState } from "react";
import { mealsData } from "../data/Meals";
import { Meal } from "../components/molecules/Meal";

export const Menu = () => {
    // Access query parameters from the location object
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const q = queryParams.get('q');

    const [tags, setTags] = useState(q?q.split(" "):[])



  const handleClick = (tag: string) => {
    console.log(tag)
    const newTags = tags.filter(t => t !== tag)
    setTags(newTags)
  }
  const handleSearch = (input: string):boolean => {
    console.log(input)
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
                        {tags.map(tag => <Tag key={tag} onClick={handleClick} tag={tag}/>)}
                    </div>
                </div>
                {/* meals */}
                <div className="flex items-start gap-2 self-stretch flex-wrap">
                    {mealsData.map(meal => {
                        console.log
                        return (
                            <Meal  {...meal} key={meal.id}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}