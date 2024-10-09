import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import MovieId from "./MovieId";
import authLoading from "./Loading";

export const store = configureStore({
  reducer: { MovieId: MovieId, authLoading: authLoading },
});
