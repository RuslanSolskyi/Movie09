import React from 'react';
import { NavLink } from 'react-router-dom';
import { IMovie } from '../../../interfaces/movieInterface';
import { getStarRating } from '../getStarRating';
import styles from '../Movies.module.css';

interface Props {
    movies: IMovie[];
}

const MovieList: React.FC<Props> = ({ movies }) => {
    return (
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
    );
};

export default MovieList;
