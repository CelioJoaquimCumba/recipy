import { createBrowserRouter } from "react-router-dom"
import { Home } from "../pages/Home"
import { Meal } from "../pages/Meal"
import { Menu } from "../pages/Menu"

export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "meal/:id",
                element: <Meal/>
            },
            {
                path: "menu",
                element: <Menu/>
            }
        ]
    },
    {
        path: "/*",
        element: <div>404</div>
    }
])