import { useNavigate } from "react-router-dom"
import { meal } from "../../models/Meal"
import { Chip } from "../atoms/Chip"


export const Meal = ({ id, name, categories, image, duration}: meal) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/meal/${encodeURIComponent(id)}`)
    }
    return (
        <div onClick={handleClick} className=" bg-cover bg-center  flex min-w-[12.5rem] min-h-[18.75rem]  flex-col justify-end items-start gap-2 rounded-2xl shadow-m " style={{backgroundImage: `url(${image})`}}>
            <div className=" flex-grow w-full bg-gradient-to-t from-black to-transparent p-2 opacity-90 rounded-2xl flex flex-col justify-end">
                <div className="flex flex-wrap-reverse content-center gap-2 self-stretch">
                    {categories && categories.map((category: string) => {
                        return (
                            <Chip key={category} name={category}/>
                        )
                    })}
                </div>
                <div className="flex flex-col justify-end items-start self-stretch">
                    <span className="text-white text-base leading-6 font-bold">{name}</span>
                    <span className="text-white text-base leading-6 font-normal">{duration} min</span>
                </div>
            </div>
        </div>
    )
}