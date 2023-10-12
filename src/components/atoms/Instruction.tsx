import { useEffect, useRef, useState } from "react"
import { instruction } from "../../models/Instructions"

export const Instruction = ({index, instruction}: instruction) => {
    const [isOpen, setIsOpen] = useState(false)
    const instructionContainer = useRef(null)
    const [isWrapped, setIsWrapped] = useState(false);

    useEffect(() => {
        const checkIfWrapped = () => {
        if (!instructionContainer.current) {
            return;
        }
        const container = instructionContainer.current as HTMLElement;
        if (!container) {
        return;
        }
        const containerWidth = container.offsetWidth;
        const textNode = container.firstChild as HTMLElement; // Assuming the text node is the first child

        // Check if the text overflows the container
        setIsWrapped(textNode.offsetWidth >= containerWidth);
        }

        checkIfWrapped();
        window.addEventListener('resize', checkIfWrapped);

        return () => {
        window.removeEventListener('resize', checkIfWrapped);
        };
    },[instructionContainer])

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="  flex gap-2 p-4 justify-center items-start self-stretch rounded-lg bg-white shadow-sm" onClick={handleClick}>
            <span className="text-gray-500 text-base leading-6 font-bold">{index}.</span>
            <span ref={instructionContainer} className={`flex flex-col text-gray-500 text-base leading-6 font-normal w-10/12 items-start justify-end transition- ${isOpen && "truncate"}`}>
            <span>{instruction}</span></span>
            { isWrapped && 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  className={`transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
            }`}>
                    <path d="M5 15L12 8L19 15" stroke="#3F3F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
        </div>
    )
}