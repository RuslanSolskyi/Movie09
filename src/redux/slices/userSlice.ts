import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../interfaces/userInterface";

interface IState {
    users: IUser[],
    user: string
}

const initialState: IState = {
    users: [],
    user: null
}
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setAll: (state, action) => {
            state.users = action.payload
        },
        // setAll: Ця дія призначена для оновлення списку користувачів (users). Вона отримує новий список
        // користувачів як параметр і встановлює цей список як новий стан для частини Redux, яка відповідає
        // за користувачів. Іншими словами, вона допомагає оновлювати вміст списку користувачів у стані Redux.
        setCurrent: (state, action) => {
            state.user = action.payload
            // setCurrent: Ця дія призначена для встановлення поточного користувача (user). Вона отримує
            // користувача як параметр і встановлює цього користувача як поточного у стані Redux. Це може
            // бути корисним, коли вам потрібно визначити, який користувач знаходиться в додатку у данний
            // момент.
        }
    }
})

const {reducer:userReducer, actions:userActions} = userSlice;

export {
    userReducer,
    userActions
}
// import { createSlice } from "@reduxjs/toolkit";
// import { IMovie } from "../../interfaces/movieInterface"; // Припустимо, що у вас є відповідний інтерфейс IMovie
//
// interface IState {
//     movies: IMovie[],
//     selectedMovie: IMovie | null
// }
//
// const initialState: IState = {
//     movies: [],
//     selectedMovie: null
// }
//
// const movieSlice = createSlice({
//     name: 'movieSlice',
//     initialState,
//     reducers: {
//         setAllMovies: (state, action) => {
//             state.movies = action.payload;
//         },
//         setSelectedMovie: (state, action) => {
//             state.selectedMovie = action.payload;
//         }
//     }
// })
//
// const { reducer: movieReducer, actions: movieActions } = movieSlice;
//
// export {
//     movieReducer,
//     movieActions
// }
