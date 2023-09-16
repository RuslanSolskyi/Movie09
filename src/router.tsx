// import {createBrowserRouter, Navigate} from "react-router-dom";
// import {MoviesPage} from "./pages/MoviesPage";
// import {GenresPage} from "./pages/GenresPage";
// import {CountPage} from "./pages/CountPage";
// import React from "react";
// import {MainLayout} from "./layouts/MainLayout";
//
// import MovieDetailPage from "./pages/MovieDetailPage";
//
// const router = createBrowserRouter([
//     {
//         path:'',
//         element:<MainLayout/>,
//         children:[
//             {
//                 index:true,
//                 element:<Navigate to={'users'}/>
//             },
//             {
//                 path:'users',
//                 element:<MoviesPage/>
//
//
//             },
//             {
//                 path:'posts',
//                 element:<GenresPage/>
//             },
//             {
//                 path:'count',
//                 element:<CountPage/>
//             }
//         ]
//     }
// ])
//
// export {
//     router
// }
import { createBrowserRouter, Navigate } from "react-router-dom";
import { MoviesPage } from "./pages/MoviesPage";
import { GenresPage } from "./pages/GenresPage";
import { CountPage } from "./pages/CountPage";
import React from "react";
import { MainLayout } from "./layouts/MainLayout";
import MovieDetailPage from "./pages/MovieDetailPage";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to={'users'} />
            },
            {
                path: 'users',
                element: <MoviesPage />
            },
            {
                path: 'posts',
                element: <GenresPage />
            },
            {
                path: 'count',
                element: <CountPage />
            },
            {
                path: 'movie/:id', // Додайте маршрут для сторінки деталей фільму з параметром id
                element: <MovieDetailPage />
            }
        ]
    }
]);

export {
    router
}
