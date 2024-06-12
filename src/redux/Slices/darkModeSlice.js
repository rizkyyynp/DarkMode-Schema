import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
    name: "darkMode",
    initialState: {
        darkMode: localStorage.getItem('darkMode') === 'false' ? true : false,
    },
    reducers: {
        enableDarkMode: (state) => {
            localStorage.setItem('darkMode', 'true');
            state.darkMode = true;
        },
        disableDarkMode: (state) => {
            localStorage.setItem('darkMode', 'false');
            state.darkMode = false;
        },
    },
});

export const { enableDarkMode, disableDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;