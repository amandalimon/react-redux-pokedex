import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentRegion: "pokemon?limit=151",
};

const regionSlice = createSlice({
    name: "region",
    initialState,
    reducers: {
        setCurrentRegion: (state, action) => {
            state.currentRegion = action.payload;
        },
    },
});

export const { setCurrentRegion } = regionSlice.actions;

export default regionSlice.reducer;
