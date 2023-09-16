
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MoviesList.css';
import styles from '../MoviesContainer/Movies.module.css'
import {getStarRating} from "../MoviesContainer/getStarRating";
import {IMovie} from "../../interfaces/movieInterface";



const GenreBadge: React.FC<{ genre: string; onClick: () => void; isActive: boolean }> = ({
                                                                                             genre,
                                                                                             onClick,
                                                                                             isActive,
                                                                                         }) => {
    return (
        <button className={`genre-badge ${isActive ? 'active' : ''}`} onClick={onClick}>
            {genre}
        </button>
    );
};

const MoviesList: React.FC = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [page, setPage] = useState(1); // Початкова сторінка
    const [totalPages, setTotalPages] = useState(0); // Загальна кількість сторінок
    const [genres, setGenres] = useState<string[]>([]);
    const [activeGenre, setActiveGenre] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const apiKey = 'a7e22a0fd6d38c1ae886589c063efc50';
                const response = await axios.get(
                    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`
                );
                setMovies(response.data.results);
                setTotalPages(response.data.total_pages);
            } catch (error) {
                console.error('Помилка отримання даних з API:', error);
            }
        };

        fetchMovies();
    }, [page]); // Відслідковуємо зміни сторінки

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const apiKey = 'a7e22a0fd6d38c1ae886589c063efc50';
                const response = await axios.get(
                    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
                );
                setGenres(response.data.genres.map((genre: any) => genre.name));
            } catch (error) {
                console.error('Помилка отримання списку жанрів з API:', error);
            }
        };

        fetchGenres();
    }, []);

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

    const handleGenreClick = (genre: string) => {
        setActiveGenre(genre);
    };

    const filteredMovies = activeGenre
        ? movies.filter((movie) => movie.genre_ids.includes(genres.indexOf(activeGenre) + 1))
        : movies;

    return (
        <div className="movies-container">
            <div className="genres-container">
                {genres.map((genre) => (
                    <GenreBadge
                        key={genre}
                        genre={genre}
                        onClick={() => handleGenreClick(genre)}
                        isActive={genre === activeGenre}
                    />
                ))}
            </div>
            <div className="movies-list">
                {filteredMovies.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <h3 className="movie-title">{movie.title}</h3>

                        {/*<p className="rating">{movie.vote_average}</p>*/}
                        <p className="rating">{getStarRating(movie.vote_average)}</p>
                    </div>
                ))}
            </div>
            {/*<div className={styles['movies-list']}>*/}
            {/*    {movies.map((movie) => (*/}
            {/*/!*        <div key={movie.id} className={styles['movie-card']}>*!/*/}
            {/*            <NavLink to={`/movie/${movie.id}`}>*/}
            {/*                <img*/}
            {/*                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}*/}
            {/*                    alt={movie.title}*/}
            {/*                />*/}
            {/*                <h3 className={styles['movie-title']}>{movie.title}</h3>*/}
            {/*            </NavLink>*/}
            {/*            <p className={styles['rating']}>{getStarRating(movie.vote_average)}</p>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
            {/*<div className="pagination">*/}
            {/*    <button onClick={handlePrevPage} disabled={page === 1}>*/}
            {/*        Попередня сторінка*/}
            {/*    </button>*/}
            {/*    <button onClick={handleNextPage} disabled={page === totalPages}>*/}
            {/*        Наступна сторінка*/}
            {/*    </button>*/}
            {/*</div>*/}
        </div>
    );
};

export default MoviesList;



