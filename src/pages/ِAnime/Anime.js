import { AnimeMovies } from "../../components/Api/Api";
import FetchMovies from "../../components/FetchMovies/FetchMovies";

const Anime = () => {
  return (
    <div>
      <FetchMovies title="انمي" getMovies={AnimeMovies} />
    </div>
  );
};

export default Anime;
