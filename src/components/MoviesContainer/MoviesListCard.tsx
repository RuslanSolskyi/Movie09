import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Movies.module.css'; // Імпортуйте стилі з файлу

interface Movie {
    id: number;
    title: string;
    release_date: string;
    vote_average: number;
    overview: string;
    poster_path: string;
    credits: {
        cast: {
            id: number;
            name: string;
            profile_path: string | null;
        }[];
    };
}

interface MoviesListCardProps {
    movie: Movie;
}

function MoviesListCard({ movie }: MoviesListCardProps) {
    // Функція для конвертації числового рейтингу у рядок зірочок
    function convertRatingToStars(rating: number): string {
        const maxRating = 10;
        const filledStars = Math.floor((rating / 10) * maxRating);
        const emptyStars = maxRating - filledStars;

        const starIcons = '★'.repeat(filledStars) + '☆'.repeat(emptyStars);

        return starIcons;
    }

    return (
        <div className={styles['movie-card']}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <h3 className={styles['movie-title']}>{movie.title}</h3>
            <p className={styles['release-date']}>Дата виходу: {movie.release_date}</p>
            <p className={styles['rating']}>
                Рейтинг: {convertRatingToStars(movie.vote_average)}
            </p>
            <p className={styles['overview']}>{movie.overview}</p>
            <div className={styles['actors']}>
                <h4>Актори:</h4>
                <div className={styles['actor-list']}>
                    {movie.credits.cast.map((actor) => (
                        <div key={actor.id} className={styles['actor-card']}>
                            <img
                                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                                alt={actor.name}
                            />
                            <p className={styles['actor-name']}>{actor.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MoviesListCard;
