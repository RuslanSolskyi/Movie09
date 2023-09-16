// services/movieService.ts
import axios from 'axios';
import { baseURL, apiKey } from '../contants/urls';
import {IMovie} from "../interfaces/movieInterface";


export const fetchMovies = async (page: number): Promise<IMovie[]> => {
    try {
        const response = await axios.get(
            `${baseURL}/discover/movie?api_key=${apiKey}&page=${page}`
        );
        return response.data.results;
    } catch (error) {
        console.error('Помилка отримання даних з API:', error);
        throw error;
    }
};
