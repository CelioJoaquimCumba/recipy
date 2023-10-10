import { CategoryCard } from "../atoms/CategoryCard"

export const TrendingCategories = () => {
    return (
        <div className="flex flex-col h-96 w-full gap-2">
            <div className="flex flex-row flex-grow w-full h-64 gap-2">
                <div className="w-1/2">
                    <CategoryCard name="Breakfast" image={"https://images.pexels.com/photos/3757729/pexels-photo-3757729.jpeg?auto=compress&cs=tinysrgb&w=1600"}/>
                </div>
                <div className="flex flex-col flex-grow gap-2 w-1/2">
                    <CategoryCard name="Dessert" image={"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1600"}/>
                    <CategoryCard name="Diet" image={"https://images.pexels.com/photos/1495534/pexels-photo-1495534.jpeg?auto=compress&cs=tinysrgb&w=1600"}/>
                </div>
            </div>
            <div className="h-32">
                <CategoryCard name="Lunch" image={"https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1600"}/>
            </div>
        </div>
    )
}