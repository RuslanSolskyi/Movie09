import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MovieDetailPage.css'; // Підключаємо файл стилів

function MoviesListCarD() {
    const { id } = useParams<{ id: string }>();
    const [movieDetails, setMovieDetails] = useState<any>(null);
    const [actorPhotos, setActorPhotos] = useState<string[]>([]);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const apiKey = 'a7e22a0fd6d38c1ae886589c063efc50';
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=credits`
                );
                setMovieDetails(response.data);

                // Отримати URL фотографій акторів
                const actorPhotos = response.data.credits?.cast.map((actor: any) => `https://image.tmdb.org/t/p/w500/${actor.profile_path}`);
                setActorPhotos(actorPhotos);
            } catch (error) {
                console.error('Помилка отримання даних з API:', error);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (!movieDetails) {
        return <div>Loading...</div>;
    }

    const cast = movieDetails.credits?.cast || [];

    return (
        <div className="movie-details-container">
            <div className="movie-details-image">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                    alt={movieDetails.title}
                />
            </div>
            <div className="movie-details-info">
                <h1>{movieDetails.title}</h1>
                <p>Рейтинг: {movieDetails.vote_average}</p>
                <p>Жанри: {movieDetails.genres.map((genre: any) => genre.name).join(', ')}</p>
                <p>Тривалість: {movieDetails.runtime} хвилин</p>
                <h2>Актори:</h2>
                <ul className="actor-list">
                    {cast.slice(0, 5).map((actor: any, index: number) => (
                        <li key={actor.id}>
                            <img src={actorPhotos[index]} alt={actor.name} />
                        </li>
                    ))}
                </ul>
                {/* Додайте інші деталі, які вам потрібні */}
            </div>
        </div>
    );
}

export default MoviesListCarD;