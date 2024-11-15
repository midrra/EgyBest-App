import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import MovieId from "./MovieId";
import authLoading from "./Loading";
import FilteredMovies from "./FilteredMovies";

export const store = configureStore({
  reducer: { MovieId: MovieId, authLoading: authLoading, FilteredMovies:FilteredMovies },
});
