import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";

export const store = configureStore({
    reducer: {
        comp: movieReducer,
    }
})