import React from 'react';
import {useParams} from "react-router-dom";
import MoviesListCard from "../components/MoviesContainer/MoviesListCard";

const MovieDetailPage = () => {
    const { id } = useParams();
    const movieData = {
        id: 1,
        title: 'Sample Movie',
        release_date: '2023-09-16',
        vote_average: 7.5,
        overview: 'This is a sample movie overview.',
        poster_path: '/sample-poster.jpg',
        credits: {
            cast: [
                {
                    id: 101,
                    name: 'Actor 1',
                    profile_path: '/actor1.jpg',
                },
                {
                    id: 102,
                    name: 'Actor 2',
                    profile_path: '/actor2.jpg',
                },
            ],
        },
    };
    return (
        <div>
            <MoviesListCard movie={movieData}></MoviesListCard>
            drhtrhtrhtr
        </div>
    );
};

export default MovieDetailPage;