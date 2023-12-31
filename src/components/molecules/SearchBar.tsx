import React, { ChangeEvent, useState } from "react"


type SearchBar = {
    onSearch: (input: string) => boolean
}
export const SearchBar = ({onSearch}: SearchBar) => {
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState("")

    const handleSearch= () => {
        setLoading(true)
        setLoading(!onSearch(input))
        setInput("")
    }
    const handleCancel = () => {
        setLoading(false)
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if( e.key === 'Enter' ) {
            handleSearch()
        }
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput((e.target as HTMLInputElement).value)
    }

    return (
        <div className="flex px-4 gap-1 self-stretch bg-white rounded-2xl items-center">
            { !loading ? 
                <button onClick={handleSearch}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L15 15M17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            :
                <button onClick={handleCancel}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6 6L18 18M6 18L18 6L6 18Z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            
            }
            <input autoFocus value={input} onChange={handleChange} type="text" placeholder="Search Recipes" className=" w-full py-4  placeholder-gray-500 text-base leading-6 font-normal w-100 ring-0  focus:outline-none" onKeyDown={handleKeyDown} />
        </div>
    )
}

