import {createBrowserRouter, Navigate} from "react-router-dom";
import {MoviesPage} from "./pages/MoviesPage";
import {GenresPage} from "./pages/GenresPage";
import {CountPage} from "./pages/CountPage";
import React from "react";
import {MainLayout} from "./layouts/MainLayout";

import MovieDetailPage from "./pages/MovieDetailPage";

const router = createBrowserRouter([
    {
        path:'',
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Navigate to={'users'}/>
            },
            {
                path:'users',
                element:<MoviesPage/>,
                children: [
                    {
                        path:':id',
                        element:<MovieDetailPage/>
                    }
                ]


            },
            {
                path:'posts',
                element:<GenresPage/>
            },
            {
                path:'count',
                element:<CountPage/>
            }
        ]
    }
])

export {
    router
}