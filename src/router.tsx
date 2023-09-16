import { createBrowserRouter, Navigate } from "react-router-dom";
import { MoviesPage } from "./pages/MoviesPage";
import  GenresPage  from "./pages/GenresPage";

import React from "react";
import { MainLayout } from "./layouts/MainLayout";
import MovieDetailPage from "./pages/MovieDetailPage";
import SearchPage from "./pages/SearchPage";


const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to={'movies'} />
            },
            {
                path: 'movies',
                element: <MoviesPage />
            },
            {
                path: 'genres',
                element: <GenresPage />
            },
            {
                path: 'search',
                element: <SearchPage />
            },
            {
                path: 'movie/:id',
                element: <MovieDetailPage />
            }
        ]
    }
]);

export {
    router
}
