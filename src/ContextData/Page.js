// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import {
//   trendingApi,
//   AnimeMovies,
//   StageMovies,
//   ProgramMovies,
//   SportMovies,
//   LibraryMovies,
//   TranGermanMovies,
//   AmericanMovies,
//   ArabicMovies,
//   InidanMovies,
//   koreanMovies,
//   JapaneseMovies,
//   ChineseMovies,
//   HorrorMovies,
//   ActionMovies,
//   RomanceMovies,
//   KomedyMovies,
//   CartoonMovies,
//   ScienceFictionMovies,
//   DocumentaryMovies,
//   WarMovies,
//   EgyptianMovies,
// } from "../components/Api/Api";

// const endpointMap = {
//   trending: trendingApi,
//   anime: AnimeMovies,
//   stage: StageMovies,
//   programs: ProgramMovies,
//   sports: SportMovies,
//   library: LibraryMovies,
//   translatedMovies: TranGermanMovies,
//   american: AmericanMovies,
//   arabic: ArabicMovies,
//   indian: InidanMovies,
//   korean: koreanMovies,
//   japanese: JapaneseMovies,
//   chinese: ChineseMovies,
//   hororr: HorrorMovies,
//   action: ActionMovies,
//   romance: RomanceMovies,
//   Komedy: KomedyMovies,
//   cartoon: CartoonMovies,
//   science: ScienceFictionMovies,
//   documentary: DocumentaryMovies,
//   war: WarMovies,
//   egyptian: EgyptianMovies,
// };

// // 🔁 Reusable thunk
// export const fetchCategoryData = createAsyncThunk(
//   "movies/fetchCategoryData",
//   async ({ category, page }) => {
//     const endpoint = endpointMap[category];
//     const data = await endpoint(page);

//     return { category, page, data: data, totalPages: data.total_pages };
//   }
// );

// const PageSlice = createSlice({
//   name: "movies",
//   initialState: {
//     trending: { data: {}, page: 1, totalPages: 1 },
//     anime: { data: {}, page: 1, totalPages: 1 },
//     stage: { data: {}, page: 1, totalPages: 1 },
//     programs: { data: {}, page: 1, totalPages: 1 },
//     sports: { data: {}, page: 1, totalPages: 1 },
//     library: { data: {}, page: 1, totalPages: 1 },
//     translatedMovies: { data: {}, page: 1, totalPages: 1 },
//     american: { data: {}, page: 1, totalPages: 1 },
//     arabic: { data: {}, page: 1, totalPages: 1 },
//     indian: { data: {}, page: 1, totalPages: 1 },
//     korean: { data: {}, page: 1, totalPages: 1 },
//     japanese: { data: {}, page: 1, totalPages: 1 },
//     chinese: { data: {}, page: 1, totalPages: 1 },
//     hororr: { data: {}, page: 1, totalPages: 1 },
//     action: { data: {}, page: 1, totalPages: 1 },
//     romance: { data: {}, page: 1, totalPages: 1 },
//     Komedy: { data: {}, page: 1, totalPages: 1 },
//     cartoon: { data: {}, page: 1, totalPages: 1 },
//     science: { data: {}, page: 1, totalPages: 1 },
//     documentary: { data: {}, page: 1, totalPages: 1 },
//     war: { data: {}, page: 1, totalPages: 1 },
//     egyptian: { data: {}, page: 1, totalPages: 1 },
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchCategoryData.fulfilled, (state, action) => {
//       const { category, page, data, totalPages } = action.payload;
//       state[category] = {
//         data,
//         page,
//         totalPages,
//       };
//     });
//   },
// });

// export default PageSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  trendingApi,
  AnimeMovies,
  StageMovies,
  ProgramMovies,
  SportMovies,
  LibraryMovies,
  TranGermanMovies,
  AmericanMovies,
  ArabicMovies,
  InidanMovies,
  koreanMovies,
  JapaneseMovies,
  ChineseMovies,
  HorrorMovies,
  ActionMovies,
  RomanceMovies,
  KomedyMovies,
  CartoonMovies,
  ScienceFictionMovies,
  DocumentaryMovies,
  WarMovies,
  EgyptianMovies,
} from "../components/Api/Api";

// 🔁 Map endpoints to categories
const endpointMap = {
  trending: trendingApi,
  anime: AnimeMovies,
  stage: StageMovies,
  programs: ProgramMovies,
  sports: SportMovies,
  library: LibraryMovies,
  translatedMovies: TranGermanMovies,
  american: AmericanMovies,
  arabic: ArabicMovies,
  indian: InidanMovies,
  korean: koreanMovies,
  japanese: JapaneseMovies,
  chinese: ChineseMovies,
  hororr: HorrorMovies,
  action: ActionMovies,
  romance: RomanceMovies,
  Komedy: KomedyMovies,
  cartoon: CartoonMovies,
  science: ScienceFictionMovies,
  documentary: DocumentaryMovies,
  war: WarMovies,
  egyptian: EgyptianMovies,
};

// 🔄 Async thunk
export const fetchCategoryData = createAsyncThunk(
  "movies/fetchCategoryData",
  async ({ category, page, time }, { rejectWithValue }) => {
    try {
      const endpoint = endpointMap[category];
      const data = await endpoint(page, time);
      return { category, page, data, totalPages: data.total_pages };
    } catch (error) {
      return rejectWithValue({ category, message: error.message });
    }
  }
);

//  Helper to build initial state for each category
const createCategoryState = () => ({
  data: {},
  page: 1,
  totalPages: 1,
  loading: false,
  error: null,
});

//  Initial State
const initialState = {};
for (const category in endpointMap) {
  initialState[category] = createCategoryState();
}

//  Slice
const PageSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryData.pending, (state, action) => {
        const category = action.meta.arg.category;
        state[category].loading = true;
        state[category].error = null;
      })
      .addCase(fetchCategoryData.fulfilled, (state, action) => {
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
      .addCase(fetchCategoryData.rejected, (state, action) => {
        const { category, message } = action.payload || {};
        if (category) {
          state[category].loading = false;
          state[category].error = message || "Something went wrong.";
        }
      });
  },
});

export default PageSlice.reducer;
