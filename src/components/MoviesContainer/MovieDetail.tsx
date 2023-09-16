import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface MovieDetailProps {
    match: { params: { id: string } };

}

export interface Movie {
    id: number;
    title: string;
    release_date: string;
    vote_average: number;
    overview: string;
    poster_path: string;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ match }) => {
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const apiKey = 'a7e22a0fd6d38c1ae886589c063efc50';
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${apiKey}`
                );
                setMovie(response.data);
            } catch (error) {
                console.error('Помилка отримання даних з API:', error);
            }
        };

        fetchMovie();
    }, [match.params.id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{movie.title}</h2>
            <p>Рейтинг: {movie.vote_average}</p>
            <p>Огляд: {movie.overview}</p>
            <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
            />
        </div>
    );
};

export default MovieDetail;
