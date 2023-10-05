import React from "react"

type PillProps = {
    category: string
    active?: boolean
    onClick: () => void
}
export const Pill = ({category, active=false, onClick}: PillProps) => {
    const handleClick = () => {
        onClick()
    }
    
    return (
        <button onClick={handleClick} className={"flex p-2 items-center gap-2.5 rounded-lg whitespace-nowrap" + (active ? " bg-orange-600 text-white" : " bg-gray-200 text-gray-500 wrap")}>{category}</button>
    )
}