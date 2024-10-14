import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initial = {
  movie: [],
};
const movieFilter = createSlice({
  name: "filtred Movie",
  initialState: initial,
  reducers: {
    filtred(state, action) {
      console.log(state, "from state");
      const movies = action.payload;
      //   console.log(movies, "Frjo redxu");
      const filter = movies.filter((f) => {
        const { release_date, first_air_date } = f;
        return (
          release_date?.slice(0, 4) || first_air_date?.slice(0, 4) === "2024"
        );
      });
      state.movie = filter;
      console.log(state.movie, "from state movie");
      //   console.log(filter);

      //   console.log(filter, "From filerrr");
    },
  },
});

export const moveAction = movieFilter.actions;
export default movieFilter.reducer;
