import { ScrollRestoration, createBrowserRouter } from "react-router-dom"
import { Home } from "../pages/Home"
import { Meal } from "../pages/Meal"
import { Menu } from "../pages/Menu"

export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "",
                element: <><ScrollRestoration/><Home/></>
            },
            {
                path: "meal/:id",
                element: <><ScrollRestoration/><Meal/></>
            },
            {
                path: "menu",
                element: <><ScrollRestoration/><Menu/></>
            }
        ]
    },
    {
        path: "/*",
        element: <div>404</div>
    }
])
