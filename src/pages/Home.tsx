import React from "react";
import { NavBar } from "../components/molecules/NavBar";
import { SearchBar } from "../components/molecules/SearchBar";
import { Pills } from "../components/organisms/Pills";
import { Meals } from "../components/organisms/Meals";
import { Button } from "../components/atoms/Button";
export const Home = () => {
    return (
        <div className=" h-screen w-screen flex px-4 pt-2 pb4 flex-col bg-gray-100">
            <NavBar/>
            {/* body */}
            <div className="flex py-4 flex-col items-start gap-4 flex-grow self-stretch">
                {/* header */}
                <div className="flex flex-col items-start gap-2 self-stretch">
                    <h1 className="text-sm leading-5 font-light text-center text-orange-600">Good morning</h1>
                    <p className="text-gray-700 text-base leading-6 font-normal">What would you like to cook today?</p>
                    <SearchBar/>
                </div>
                {/* meals by category */}
                <div className="flex flex-col gap-4 items-start self-stretch">
                    <Pills/>
                    <Meals/>
                </div>
                {/* popular meals title */}
                <div className="flex items-start gap-2 self-stretch justify-between">
                    <h1 className="text-base leading-6 font-semibold text-gray-700">Popular meals</h1>
                    <a href="./menu" className="text-base leading-6 font-light text-orange-600"> see all</a>

                </div>
                {/* popular meals */}
                <Meals/>
                {/* something new */}
                <div className="flex items-start gap-2 self-stretch flex-col">
                    <h1 className="text-base leading-6 font-semibold text-gray-700">Something new</h1>
                    <div className="flex p-2 justify-center items-center gap-2 flex-grow self-stretch rounded-2xl bg-gray-200">
                        <span className="text-base leading-6 font-medium">
                            We have alot of recomendations for you!
                        </span>
                        <Button/>

                    </div>
                </div>

            </div>
        </div>
    );
};