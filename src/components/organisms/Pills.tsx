import { useState } from "react";
import { Pill } from "../atoms/Pill";
import { category } from "../../models/Category";

type pillsProps = {
    categories: category[]
    addSelectedCategory: (categories: boolean[]) => void
}
export const Pills = ({categories, addSelectedCategory: selectCategory}: pillsProps) => {
    const [allActive, setAllActive] = useState(true);
    const [activeCategories, setActiveCategories] = useState(new Array(categories.length).fill(false));

    const handleCategoryClick = (index: number) => {
        const newActiveCategories = [...activeCategories];
        newActiveCategories[index] = !newActiveCategories[index];
        setActiveCategories(newActiveCategories);
        selectCategory(activeCategories)
        for (let i = 0; i < newActiveCategories.length; i++) {
            if (!newActiveCategories[i]) {
                setAllActive(false)
                return
            }
        }
        setAllActive(true)
        setActiveCategories(new Array(categories.length).fill(false));
    }
    const handleAllActiveClick = () => {
        setAllActive(!allActive);
        setActiveCategories(new Array(categories.length).fill(false));
    }
    return (
            
                // categories
                <div className="flex items-start gap-2 self-stretch overflow-auto">
                    <Pill category="All" active={allActive} onClick={handleAllActiveClick}/>
                    {categories.map((category, index) => (
                        <Pill key={index} category={category} active={activeCategories[index]} onClick={()=>handleCategoryClick(index)}/>
                    ))}
                </div>
    )
}