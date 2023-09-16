
    import React, { useState, useEffect } from 'react';
    import styles from './Movies.module.css';
    import { getStarRating } from './getStarRating';
    import { NavLink } from 'react-router-dom';
    import { IMovie } from '../../interfaces/movieInterface';
    import { fetchMovies } from '../../services/movieService';

    const MoviesList: React.FC = () => {
        const [movies, setMovies] = useState<IMovie[]>([]);
        const [page, setPage] = useState<number>(1); // Початкова сторінка
        const [totalPages, setTotalPages] = useState<number>(0); // Загальна кількість сторінок

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

        const handlePrevPage = () => {
            if (page > 1) {
                setPage(page - 1);
            }
        };

        const handleNextPage = () => {
            if (page < totalPages) {
                setPage(page + 1);
            }
        };

        return (
            <div>
                <div className={styles['movies-list']}>
                    {movies.map((movie) => (
                        <div key={movie.id} className={styles['movie-card']}>
                            <NavLink to={`/movie/${movie.id}`}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    alt={movie.title}
                                />
                                <h3 className={styles['movie-title']}>{movie.title}</h3>
                            </NavLink>
                            <p className={styles['rating']}>{getStarRating(movie.vote_average)}</p>
                        </div>
                    ))}
                </div>
                <div className={styles['pagination']}>
                    <button onClick={handlePrevPage} disabled={page === 1}>
                        Попередня сторінка
                    </button>
                    <button onClick={handleNextPage} disabled={page === totalPages}>
                        Наступна сторінка
                    </button>
                </div>
            </div>
        );
    };

    export default MoviesList;

