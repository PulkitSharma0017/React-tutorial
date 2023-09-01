import { createSlice, configureStore } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: ["OG song"],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      //
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});

export { store };
