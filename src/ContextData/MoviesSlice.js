import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  moviesApi,
  nowPlaying,
  TopRated,
  UpcomingMovies,
  TopRatedSeries,
  NowPlayingSeries,
  AiringTodaySeries,
  SeriesApi,
} from "../components/Api/Api";

// Map endpoints to categories
const endpointMap = {
  movies: moviesApi,
  nowPlaying: nowPlaying,
  topRated: TopRated,
  upcoming: UpcomingMovies,
  topRatedSeries: TopRatedSeries,
  nowPlayingSeries: NowPlayingSeries,
  airingTodaySeries: AiringTodaySeries,
  series: SeriesApi,
};

// 🔄 Async thunk
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (
    { category, page, type, lang, year, country },
    { rejectWithValue }
  ) => {
    try {
      const endpoint = endpointMap[category];
      const data = await endpoint(page, type, lang, year, country);
      console.log(data, "from MovieSlice");
      return {
        category,
        page,
        data: data,
        totalPages: data.total_pages,
      };
    } catch (error) {
      return rejectWithValue({ category, message: error.message });
    }
  }
);

//  Initial State
const initialState = {
  movies: { data: {}, page: 1, totalPages: 1, loading: false },
  nowPlaying: { data: {}, page: 1, totalPages: 1, loading: false },
  topRated: { data: {}, page: 1, totalPages: 1, loading: false },
  upcoming: { data: {}, page: 1, totalPages: 1, loading: false },
  topRatedSeries: { data: {}, page: 1, totalPages: 1, loading: false },
  nowPlayingSeries: { data: {}, page: 1, totalPages: 1, loading: false },
  airingTodaySeries: { data: {}, page: 1, totalPages: 1, loading: false },
  series: { data: {}, page: 1, totalPages: 1, loading: false },
};

//  Slice
const MoviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state, action) => {
        const category = action.meta.arg.category;
        state[category].loading = true;
        state[category].error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        const { category, page, data, totalPages } = action.payload;
        state[category] = {
          ...state[category],
          data,
          page,
          totalPages,
          loading: false,
          error: null,
        };
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        const { category, message } = action.payload || {};
        if (category) {
          state[category].loading = false;
          state[category].error = message || "Something went wrong.";
        }
      });
  },
});

export default MoviesSlice.reducer;
