// genresSlice.ts (Redux-сховище для жанрів)
import { createSlice } from '@reduxjs/toolkit';

const genresSlice = createSlice({
    name: 'genres',
    initialState: [],
    reducers: {
        setGenres: (state, action) => {
            return action.payload;
        },
    },
});

export const { setGenres } = genresSlice.actions;

export default genresSlice.reducer;



const { reducer: genresReducer, actions: genresActions } = genresSlice;

export { genresActions, genresReducer };
