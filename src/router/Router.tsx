import React from "react"
import { createBrowserRouter } from "react-router-dom"
import { Home } from "../pages/Home"
import { Meal } from "../pages/Meal"

export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "meal/:mealUri",
                element: <Meal/>
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