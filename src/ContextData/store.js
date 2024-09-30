import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import MovieId from "./MovieId";

export const store = configureStore({
  reducer: { MovieId: MovieId },
});
