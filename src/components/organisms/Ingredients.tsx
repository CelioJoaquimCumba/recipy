import { ingredient } from "../../models/Ingredient"
import { Ingredient } from "../atoms/Ingredient"

type ingredientsList = {
    ingredients : ingredient[]
}

export const Ingredients = ({ingredients} : ingredientsList) => {
    return (
        <div className="flex flex-col items-start gap-2 self-stretch bg-white px-4 rounded-lg ">
            {ingredients && ingredients.map((ingredient:ingredient) => {
                return (
                    <Ingredient key={ingredient.ingredient} ingredient={ingredient.ingredient} quantity={ingredient.quantity} unit={ingredient.unit}/>
                )
            })}
        </div>
    )
}