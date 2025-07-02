import { useState, useEffect } from "react";
import CenterialContainer from "../../components/CenteralContainer/CenteralContainer";
import Categories from "../../components/Categories/Categories";
import styles from "./Trends.module.scss";

import ChooseHeadicon from "./ChooseHeadicon";
import { headTrends } from "./TrendsData";
import { MetroSpinner } from "react-spinners-kit";

import MovieDetail from "../../components/MovieDetail/MovieDetail";
const Trending = () => {
  const [trend, setTrend] = useState(headTrends[0].id);
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const topMovies = async () => {
    setMovies([]);
    setLoading(true);
    const respond = await fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=88170d99a195633ba877280a25be1735`
    );
    const result = await respond.json();
    setLoading(false);
    return result.results;
  };

  const Toprend = async (time) => {
    setMovies([]);
    setLoading(true);
    const respond = await fetch(
      `https://api.themoviedb.org/3/trending/all/${time}?api_key=88170d99a195633ba877280a25be1735`
    );
    const result = await respond.json();
    setLoading(false);
    return result.results;
  };

  useEffect(() => {
    async function egyApi() {
      switch (title) {
        case headTrends[0].title:
          const topResult2 = await topMovies();
          setMovies(topResult2);
          break;
        case headTrends[1].title:
          const resultDay = await Toprend("day");
          setMovies(resultDay);
          break;
        case headTrends[2].title:
          const weekResult = await Toprend("week");
          setMovies(weekResult);
          break;
        case headTrends[3].title:
          const dayResult = await Toprend("day");
          setMovies(dayResult);
          break;
        default:
          let topResult = await topMovies();
          setMovies(topResult);
          break;
      }
    }
    egyApi();
  }, [title]);

  return (
    <CenterialContainer>
      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.content}>
            {headTrends.map((item) => (
              <ChooseHeadicon
                key={item.id}
                logo={item?.logo}
                title={item.title}
                setTrend={setTrend}
                id={item.id}
                active={trend === item.id}
                setTitle={setTitle}
              />
            ))}
          </div>
        </div>
        <hr />
        <div className={styles.spinnerContainer}>
          <div className="spinner">
            <MetroSpinner size={40} color="green" loading={loading} />
          </div>
        </div>
        <MovieDetail movies={movies} />
      </div>
      <Categories position="relative" ActiveWidth={true} full={true} />
    </CenterialContainer>
  );
};

export default Trending;
