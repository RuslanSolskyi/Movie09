//
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './MoviesList.css';
// import { IMovie } from '../../interfaces/movieInterface';
// import MovieList from "../MoviesContainer/MovieList/MovieList";
// import GenreBadge from "./GenreBadge";
// // import GenreBadge from "./GenreBadge";
//
//
// // const GenreBadge: React.FC<{ genre: string; onClick: () => void; isActive: boolean }> = ({
// //                                                                                              genre,
// //                                                                                              onClick,
// //                                                                                              isActive,
// //                                                                                          }) => {
// //     return (
// //         <button className={`genre-badge ${isActive ? 'active' : ''}`} onClick={onClick}>
// //             {genre}
// //         </button>
// //     );
// // };
//
// const GanresList: React.FC = () => {
//     const [movies, setMovies] = useState<IMovie[]>([]);
//     const [page, setPage] = useState(1); // Початкова сторінка
//     const [totalPages, setTotalPages] = useState(0); // Загальна кількість сторінок
//     const [genres, setGenres] = useState<string[]>([]);
//     const [activeGenre, setActiveGenre] = useState<string | null>(null);
//
//     useEffect(() => {
//         const fetchMovies = async () => {
//             try {
//                 const apiKey = 'a7e22a0fd6d38c1ae886589c063efc50';
//                 const response = await axios.get(
//                     `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`
//                 );
//                 setMovies(response.data.results);
//                 setTotalPages(response.data.total_pages);
//             } catch (error) {
//                 console.error('Помилка отримання даних з API:', error);
//             }
//         };
//
//         fetchMovies();
//     }, [page]); // Відслідковуємо зміни сторінки
//
//     useEffect(() => {
//         const fetchGenres = async () => {
//             try {
//                 const apiKey = 'a7e22a0fd6d38c1ae886589c063efc50';
//                 const response = await axios.get(
//                     `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
//                 );
//                 setGenres(response.data.genres.map((genre: any) => genre.name));
//             } catch (error) {
//                 console.error('Помилка отримання списку жанрів з API:', error);
//             }
//         };
//
//         fetchGenres();
//     }, []);
//
//     const handlePrevPage = () => {
//         if (page > 1) {
//             setPage(page - 1);
//         }
//     };
//
//     const handleNextPage = () => {
//         if (page < totalPages) {
//             setPage(page + 1);
//         }
//     };
//
//     const handleGenreClick = (genre: string) => {
//         setActiveGenre(genre);
//     };
//
//     const filteredMovies = activeGenre
//         ? movies.filter((movie) =>
//             movie.genre_ids.includes(genres.findIndex((genreName) => genreName === activeGenre) + 1)
//         )
//         : movies;
//
//     return (
//         <div className="movies-container">
//             <div className="genres-container">
//                 {genres.map((genre) => (
//                     <GenreBadge
//                         key={genre}
//                         genre={genre}
//                         onClick={() => handleGenreClick(genre)}
//                         isActive={genre === activeGenre}
//                     />
//                 ))}
//             </div>
//             {/* Використовуємо вашу компоненту MovieList для відображення списку фільмів */}
//             <MovieList movies={filteredMovies} />
//         </div>
//     );
// };
//
// export default GanresList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MoviesList.css';
import { IMovie } from '../../interfaces/movieInterface';
import MovieList from '../MoviesContainer/MovieList/MovieList';
import GenreBadge from './GenreBadge';

const GenresList: React.FC = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
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
    }, [page]);

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
        ? movies.filter((movie) =>
            movie.genre_ids.includes(genres.findIndex((genreName) => genreName === activeGenre) + 1)
        )
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
            <MovieList movies={filteredMovies} />
        </div>
    );
};

export default GenresList;

