type categoryCard = {
    name: string
    image: string
}

export const CategoryCard = ({image, name} : categoryCard) => {

    const handleClick = () => {
        return
    }
    return (
        <div onClick={handleClick} className=" bg-cover bg-center  flex w-full h-full flex-col justify-end items-start gap-2 rounded-2xl shadow-m " style={{backgroundImage: `url(${image})`}}>
            <div className=" flex-grow w-full bg-gradient-to-t from-black to-transparent p-2 opacity-90 rounded-2xl flex flex-col justify-end">
                <div className="flex flex-col justify-end items-start self-stretch">
                    <span className="text-white text-4xl leading-10 font-black">{name}</span>
                </div>
            </div>
        </div>
    )
}