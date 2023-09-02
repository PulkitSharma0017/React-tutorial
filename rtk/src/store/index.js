import { configureStore } from "@reduxjs/toolkit";
import { movieReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { songReducer, addSong, removeSong } from "./slices/songsSlice";
import { reset } from "./actions";

const store = configureStore({
  reducer: {
    songs: songReducer,
    movies: movieReducer,
  },
});

export { store, reset, addSong, removeSong, addMovie, removeMovie };
