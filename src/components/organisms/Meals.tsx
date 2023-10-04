import React from "react"
import { Meal } from "../molecules/Meal"

export const Meals = () => {
    return (
        <div className="flex items-start gap-2 self-stretch">
            <Meal name={"Hamburguer"} category={"Lunch"} image={'https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1600'} duration={30}/>
        </div>
    )
}