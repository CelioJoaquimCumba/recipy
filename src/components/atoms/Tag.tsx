type Tag = {
    tag: string
    onClick: (tag:string) => void
}

export const Tag = ({tag, onClick}: Tag) => {
    const handleClick = (tag:string) => {
        onClick(tag)
    }
    return (
        <div className="flex justify-center items-center gap-2 rounded-2xl px-4 py-4 bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" onClick={()=>handleClick(tag)}>
                <path d="M4 4L12 12M4 12L12 4L4 12Z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-xs leading-4 font-semibold  text-gray-500">{tag}</span>
        </div>
    )
}