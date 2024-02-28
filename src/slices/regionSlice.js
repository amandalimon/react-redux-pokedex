import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    region: [
        {
            name: "Kanto",
            urlLocation: "pokemon?limit=151",
            actived: true,
        },
        {
            name: "Johto",
            urlLocation: "pokemon?limit=100&offset=151",
            actived: false,
        },
        {
            name: "Hoenn",
            urlLocation: "pokemon?limit=135&offset=251",
            actived: false,
        },
        {
            name: "Sinnoh",
            urlLocation: "pokemon?limit=107&offset=386",
            actived: false,
        },
        {
            name: "Unova",
            urlLocation: "pokemon?limit=156&offset=493",
            actived: false,
        },
        {
            name: "Kalos",
            urlLocation: "pokemon?limit=72&offset=649",
            actived: false,
        },
        {
            name: "Alola",
            urlLocation: "pokemon?limit=88&offset=721",
            actived: false,
        },
        {
            name: "Galar",
            urlLocation: "pokemon?limit=89&offset=809",
            actived: false,
        }
    ],
    currentRegion: "Kanto",
};

const regionSlice = createSlice({
    name: "region",
    initialState,
    reducers: {
        setRegion: (state, action) => {
            state.region.forEach((item, index) => {
                item.actived = index === action.payload;
            });
        },
        setCurrentRegion: (state, action) => {
            state.currentRegion = action.payload;
        },
    },
});

export const { setRegion, setCurrentRegion } = regionSlice.actions;

export default regionSlice.reducer;
