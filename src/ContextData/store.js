import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./MenuSlice";
import Page from "./Page";
import MoviesSlice from "./MoviesSlice";

export const store = configureStore({
  reducer: {
    menu: MenuReducer,
    movies: Page,
    movieChoose: MoviesSlice,
  },
});
