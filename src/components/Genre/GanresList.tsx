import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MoviesList.css';
import { useSelector, useDispatch } from 'react-redux';
import { IMovie } from '../../interfaces/movieInterface';
import MovieList from '../MoviesContainer/MovieList/MovieList';
import GenreBadge from './GenreBadge';
import { RootState } from '../../redux/store';
import { setGenres } from '../../redux/slices/genresSlice';
import { setMovies } from '../../redux/slices/moviesSlice';

interface GenresListProps {}

const GenresList: React.FC<GenresListProps> = () => {
    const movies = useSelector((state: RootState) => state.movies);
    const genres = useSelector((state: RootState) => state.genres);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [activeGenre, setActiveGenre] = useState<number | null>(null);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const apiKey = 'a7e22a0fd6d38c1ae886589c063efc50';
                const response = await axios.get(
                    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`
                );
                dispatch(setMovies(response.data.results));
                setTotalPages(response.data.total_pages);
            } catch (error) {
                console.error('Помилка отримання даних з API:', error);
            }
        };

        fetchMovies();
    }, [page, dispatch]);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const apiKey = 'a7e22a0fd6d38c1ae886589c063efc50';
                const response = await axios.get(
                    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
                );
                dispatch(setGenres(response.data.genres));
            } catch (error) {
                console.error('Помилка отримання списку жанрів з API:', error);
            }
        };

        fetchGenres();
    }, [dispatch]);

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

    const handleGenreClick = (genre: any) => { // Використовуємо тип 'any' для аргументу
        // Знайдемо числовий ідентифікатор жанру за його назвою
        const genreId = genres.find((g) => g.name === genre)?.id;

        if (genreId !== undefined) {
            setActiveGenre(genreId);
            console.log('Обрано жанр:', genre);
        }
    };

    // Оголосіть filteredMovies перед використанням
    let filteredMovies: IMovie[] = [];
    if (activeGenre !== null) {
        filteredMovies = movies.filter((movie: IMovie) =>
            movie.genre_ids.includes(activeGenre)
        );
    } else {
        filteredMovies = movies;
    }

    console.log('Фільми:', filteredMovies); // Додайте консольне виведення для фільмів

    return (
        <div className="movies-container">
            <div className="genres-container">
                {genres.map((genre) => (
                    <GenreBadge
                        key={genre.id}
                        genre={genre.name}
                        onClick={() => handleGenreClick(genre.name)}
                        isActive={genre.id === activeGenre}
                    />
                ))}
            </div>
            <MovieList movies={filteredMovies} />
        </div>
    );
};

export default GenresList;
