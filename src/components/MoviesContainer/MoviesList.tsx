import React, { useState, useEffect } from 'react';
import styles from './Movies.module.css';
import { fetchMovies } from '../../services/movieService';
import MovieList from './MovieList/MovieList';
import {IMovie} from "../../interfaces/movieInterface";

const MoviesList: React.FC = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [page, setPage] = useState<number>(1); // Початкова сторінка

    useEffect(() => {
        const fetchData = async () => {
            try {
                const results = await fetchMovies(page);
                setMovies(results);
            } catch (error) {
                console.error('Помилка отримання даних з API:', error);
            }
        };

        fetchData();
    }, [page]); // Відслідковуємо зміни сторінки

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1) {
            setPage(newPage);
        }
    };

    return (
        <div>
            <MovieList movies={movies} />
            <div className={styles['pagination']}>
                <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
                    Попередня сторінка
                </button>
                <button onClick={() => handlePageChange(page + 1)} disabled={movies.length === 0}>
                    Наступна сторінка
                </button>
            </div>
        </div>
    );
};

export default MoviesList;
