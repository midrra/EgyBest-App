import { useEffect, Fragment } from "react";
import { AnimeMovies } from "../../components/Api/Api";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { useDispatch } from "react-redux";
import { fetchCategoryData } from "../../ContextData/Page";

const Anime = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryData({ category: "anime", page: 1 }));
  }, [dispatch]);

  return (
    <Fragment>
      <FetchMovies title="انمي" getMovies={AnimeMovies} category="anime" />
    </Fragment>
  );
};

export default Anime;
