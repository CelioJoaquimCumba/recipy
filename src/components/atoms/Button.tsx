type button = {
    onClick: () => void
}

export const Button = ({onClick}: button) => {
    const handleClick = () => {
        onClick()
    }
    return(
        <button className="flex justify-end items-center gap-3 bg-orange-600 text-white px-4 py-2 rounded-full" onClick={handleClick}>Explore</button>
    )
}