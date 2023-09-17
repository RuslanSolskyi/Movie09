// У файлі moviesSlice.ts

import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState: [],
    reducers: {
        setMovies: (state, action) => {
            return [...state, ...action.payload]; // Додаємо фільми до стану
        },
    },
});

export const { setMovies } = moviesSlice.actions;

export default moviesSlice.reducer;

const { reducer: moviesReducer, actions: moviesActions } = moviesSlice;

export { moviesActions, moviesReducer };
