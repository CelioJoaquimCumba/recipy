import { meal } from "../../models/Meal"
import { meals } from "../../models/Meals"
import { Meal } from "../molecules/Meal"

export const Meals = ({meals}: meals) => {
    return (
        <div className="flex items-start gap-2 self-stretch overflow-auto min-h-[18.75rem] justify-center items-center">
            {meals.length === 0 && <p className="text-base leading-6 font-normal text-gray-500">No meals available :( Try another category</p>}
            {meals.map((meal:meal) => {
                return (
                    <Meal key={meal.name} id={meal.id} name={meal.name} categories={meal.categories} image={meal.image} duration={meal.duration}/>
                )
            })}
            
        </div>
    )
}