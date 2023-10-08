import { instruction } from "../../models/Instructions"
import { Instruction } from "../atoms/Instruction"

type instructions = {
    instructions: instruction[]
}

export const Instructions = ({instructions}: instructions) => {
    return (
        <div className="flex flex-col items-start gap-2 self-stretch">
            {instructions && instructions.map((instruction:instruction) => {
                return (
                    <Instruction key={instruction.index} index={instruction.index} instruction={instruction.instruction}/>
                )
            })}
        </div>
    )
}