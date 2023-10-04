import React from "react"

type mealProps = {
    name: string,
    category: string,
    image: string,
    duration: number
}
export const Meal = ({name, category, image, duration}: mealProps) => {
    return (
        <div className=" bg-cover bg-center bg-[url('https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1600')] flex min-w-[12.5rem] min-h-[18.75rem]  flex-col justify-end items-start gap-2 rounded-2xl shadow-m ">
            <div className=" flex-grow w-full bg-gradient-to-t from-black to-transparent p-2 opacity-90 rounded-2xl flex flex-col justify-end">
                <div>
                    <span className="text-white text-base leading-6 font-bold">{name}</span>
                    <span className="text-white text-base leading-6 font-normal">{duration} min</span>
                </div>
            </div>
        </div>
    )
}