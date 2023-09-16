import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../MoviesContainer/Movies.module.css';

import { NavLink } from 'react-router-dom';
import {getStarRating} from "../MoviesContainer/getStarRating";
import {inspect} from "util";
import {IMovie} from "../../interfaces/movieInterface";



function SearchMovies() {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [searchText, setSearchText] = useState('');

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
    }, [page]);

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

    useEffect(() => {
        const fetchMoviesBySearch = async () => {
            try {
                const apiKey = 'a7e22a0fd6d38c1ae886589c063efc50';
                const response = await axios.get(
                    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}`
                );
                setMovies(response.data.results);
                setTotalPages(response.data.total_pages);
            } catch (error) {
                console.error('Помилка отримання даних з API:', error);
            }
        };

        if (searchText.trim() !== '') {
            fetchMoviesBySearch();
        }
    }, [searchText]);

    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    return (
        <div>
            <div className={styles['movies-search']}>
                <input
                    type="text"
                    placeholder="Пошук за назвою фільму"
                    value={searchText}
                    onChange={handleSearchInputChange}
                />
            </div>
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
            {/*<div className={styles['pagination']}>*/}
            {/*    <button onClick={handlePrevPage} disabled={page === 1}>*/}
            {/*        Попередня сторінка*/}
            {/*    </button>*/}
            {/*    <button onClick={handleNextPage} disabled={page === totalPages}>*/}
            {/*        Наступна сторінка*/}
            {/*    </button>*/}
            {/*</div>*/}
        </div>
    );
}

export default SearchMovies;
