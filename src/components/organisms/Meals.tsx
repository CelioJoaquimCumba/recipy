import { meal } from "../../models/Meal"
import { meals } from "../../models/Meals"
import { Meal } from "../molecules/Meal"

export const Meals = ({meals}: meals) => {
    return (
        <div className="flex items-start gap-2 self-stretch overflow-auto">
            {meals.length === 0 && <p>No meals available now</p>}
            {meals.map((meal:meal) => {
                return (
                    <Meal key={meal.name} id={meal.id} name={meal.name} categories={meal.categories} image={meal.image} duration={meal.duration}/>
                )
            })}
            
        </div>
    )
}