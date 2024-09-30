import React, { useState } from "react";
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

// const select = useSelector((state) => state.MovieId.movieOb);
// console.log(select);

const intialValue = {
  title: "",
  movieOb: "",
  items: [],
  board: "",
};

const MovieId = createSlice({
  name: "MoviesContainer",
  initialState: intialValue,

  reducers: {
    items(state, action) {
      state.items = action.payload;
      state.board = action.payload;
    },

    title(state, action) {
      state.title = action.payload;
    },

    movieOb(state, action) {
      // console.log(action);
      // console.log(state.items);

      state.movieOb = action.payload;

      //   const goal = items.map((n) => {
      //     if (n.title === name.title) {
      //       return n.title;
      //     }
      //   });
      //   const res = items.find((item) => item.title === goal.join(""));
      //
    },

    final(state, action) {
      state.board = state.action;
    },
  },
});

// const [state, dispatch] = useReducer(ApReducer, intialValue);
export const { title, movieOb, items, final } = MovieId.actions;
export default MovieId.reducer;
