import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryData } from "../../ContextData/Page";
import { fetchMovies } from "../../ContextData/MoviesSlice";

export default function PaginationRounded({ category, totalPages, filters }) {
  const dispatch = useDispatch();

  const isBasicMovieCategory = [
    "nowPlaying",
    "topRated",
    "upcoming",
    "nowPlayingSeries",
    "seriesApi",
    "airingTodaySeries",
    "topRatedSeries",
  ].includes(category);
  const isFilteredMovies = category === "movies" || category === "series";

  const containerKey =
    isBasicMovieCategory || isFilteredMovies ? "movieChoose" : "movies";
  const { page = 1 } = useSelector(
    (state) => state[containerKey]?.[category] || {}
  );

  const handleChange = (event, value) => {
    if (isFilteredMovies) {
      dispatch(
        fetchMovies({
          category,
          page: value,
          type: filters.type,
          lang: filters.language,
          year: filters.year,
          country: filters.country,
        })
      );
    } else if (isBasicMovieCategory) {
      dispatch(fetchMovies({ category, page: value }));
    } else {
      dispatch(fetchCategoryData({ category, time: "day", page: value }));
    }
  };

  return (
    <Box display="flex" justifyContent="center">
      <Stack spacing={10} sx={{ direction: "ltr" }} className="mb-3">
        <Pagination
          count={totalPages}
          variant="outlined"
          shape="rounded"
          page={page}
          onChange={handleChange}
          sx={{
            "& .Mui-selected": {
              backgroundColor: "green !important",
              color: "white",
              borderColor: "green",
              "&:hover": {
                backgroundColor: "green !important",
              },
            },
          }}
        />
      </Stack>
    </Box>
  );
}
