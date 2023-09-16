import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
    themeCheck: boolean;
}

const initialState: ThemeState = {
    themeCheck: false,
};

const themeSlice = createSlice({
    name: "themeSlice",
    initialState,
    reducers: {
        changeThemeCheck: (state) => {
            state.themeCheck = !state.themeCheck;
        },
    },
});

const { reducer: themeReducer, actions: themeActions } = themeSlice;

export { themeActions, themeReducer };
