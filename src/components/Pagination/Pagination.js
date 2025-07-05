import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryData } from "../../ContextData/Page";

export default function PaginationRounded({ category, totalPages }) {
  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    dispatch(fetchCategoryData({ category, time: "day", page: value }));
  };

  const { page } = useSelector((state) => state.movies[category]);

  return (
    <Box display="flex" justifyContent="center" className="mb-3">
      <Stack spacing={10} style={{ direction: "ltr" }}>
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
