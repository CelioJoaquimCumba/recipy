type ChipProps = {
    name: string
}
export const Chip = ({name}: ChipProps) => {
    return (
        <span className="bg-white flex px-4 py-2 w-fit rounded-full font-bold text-gray-700 text-center text-xs leading-4 font-semibold ">{name}</span>
    )
}