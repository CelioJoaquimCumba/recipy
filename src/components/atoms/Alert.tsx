type Alert = {
    message?: string
    title: string
}

export const Alert = ({message,title}: Alert) => {
    return (
        <div className="flex flex-col bg-white border-l-4 border-orange-500 text-gray-500 p-4 w-full rounded-md" role="alert">
            <span className="font-bold">{title}</span>
            {message && <span>{message}</span>}
        </div>
    )
}