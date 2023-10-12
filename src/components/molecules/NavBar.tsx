import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// type NavBarProps = {
//     back?: boolean
// }

export const NavBar = () => {
    const [scrollingUp, setScrollingUp] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
            setScrollingUp(true);
        } else {
            setScrollingUp(false);
        }

        setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);
    return(
        <div className={`flex flex-row bg-gray-50 rounded-b-2xl  w-full p-4 justify-between items-end sticky top-0 z-10 transition-transform duration-500 ${scrollingUp ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="flex flex-row gap-2 items-end flex-grow">
                <h1 className="text-gray-900 text-lg leading-7 font-semibold"><Link to="/">Recipy</Link></h1>
            </div>
            <h1 className="text-xs leading-4 font-normal text-gray-900 truncate">made by Celio Cumba</h1>
        </div>
    )
}