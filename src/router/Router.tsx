import React from "react"
import { createBrowserRouter } from "react-router-dom"
import { Home } from "../pages/Home"

export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "meal/:mealId",
                element: <div>meal</div>
            },
            {
                path: "menu",
                element: <div>menu</div>
            }
        ]
    },
    {
        path: "/*",
        element: <div>404</div>
    }
])