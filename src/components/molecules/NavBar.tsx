type NavBarProps = {
    back?: boolean
}

export const NavBar = ({back=false}: NavBarProps) => {
    return(
        <div className="flex flex-row bg-gray-50 rounded-2xl w-full px-2 py-4 justify-between items-end">
            <div className="flex flex-row gap-2 items-end flex-grow">
                {back ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" className="w-6 h-6">
                        <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd" />
                    </svg>
                ) : ""}
                <h1 className="text-gray-900 text-lg leading-7 font-semibold">Recipy</h1>
            </div>
            <h1 className="text-xs leading-4 font-normal text-gray-900">made by Celio Cumba</h1>
        </div>
    )
}