import { ingredient } from "../../models/Ingredient"


export const Ingredient  = ({ingredient, quantity, unit}: ingredient) => {
    return (
        <div className="flex p-4 justify-between items-end self-stretch rounded-lg bg-white shadow-sm">
            <span className="flex flex-col text-gray-500 text-base leading-6 font-bold">{ingredient}</span>
            <span className="text-gray-500 text-base leading-6 font-normal">{quantity} {unit}</span>
        </div>
    )
}