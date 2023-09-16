// const baseURL = process.env.REACT_APP_API
//
// const movies = '/movies'
// const genres = '/genres'
//
// const urls ={
//     movies,
//     genres
// }
//
// export {
//     baseURL,
//     urls
// }
const baseURL = 'https://api.themoviedb.org/3';

const endpoints = {
    movies: '/discover/movie',
    genres: '/genre/movie/list',
    search: '/search/movie',
    movieDetails: '/movie', // Оновлений шлях для деталей фільму
};

const apiKey = 'a7e22a0fd6d38c1ae886589c063efc50';

const urls = {
    movies: `${baseURL}${endpoints.movies}?api_key=${apiKey}`,
    genres: `${baseURL}${endpoints.genres}?api_key=${apiKey}`,
    search: `${baseURL}${endpoints.search}?api_key=${apiKey}`,
    movieDetails: `${baseURL}${endpoints.movieDetails}`, // Оновлений URL для деталей фільму
};

export { baseURL, urls };
