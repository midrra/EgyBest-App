import { useState, useEffect } from "react";
import CenterialContainer from "../../components/CenteralContainer/CenteralContainer";
import Categories from "../../components/Categories/Categories";
import styles from "./Trends.module.scss";

import ChooseHeadicon from "./ChooseHeadicon";
import { headTrends } from "./TrendsData";
import { MetroSpinner } from "react-spinners-kit";

import MovieDetail from "../../components/MovieDetail/MovieDetail";
import Pagination from "../../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryData } from "../../ContextData/Page";

const Trending = () => {
  const [trend, setTrend] = useState(headTrends[0].id);
  const [title, setTitle] = useState("");
  const category = "trending";

  const dispatch = useDispatch();

  const { data, totalPages, loading } = useSelector(
    (state) => state.movies[category]
  );

  useEffect(() => {
    switch (title) {
      case headTrends[0].title:
        dispatch(
          fetchCategoryData({ category: category, time: "day", page: 1 })
        );
        break;
      case headTrends[1].title:
        dispatch(
          fetchCategoryData({ category: category, time: "week", page: 1 })
        );
        break;
      case headTrends[2].title:
        dispatch(
          fetchCategoryData({ category: category, time: "day", page: 1 })
        );
        break;
      case headTrends[3].title:
        dispatch(
          fetchCategoryData({ category: category, time: "week", page: 1 })
        );
        break;
      default:
        dispatch(
          fetchCategoryData({ category: category, time: "day", page: 1 })
        );
        break;
    }
  }, [title, dispatch]);

  return (
    <CenterialContainer>
      <div
        className={`${styles.container} ${
          !loading ? styles["hide-after"] : ""
        }`}
      >
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
        <hr className={styles.line} />

        <div className={styles.spinnerContainer}>
          <div className="spinner">
            <MetroSpinner size={80} color="green" loading={loading} />
          </div>
        </div>
        <MovieDetail movies={data?.results} />
        <Pagination category={category} totalPages={totalPages} />
      </div>
      <Categories position="relative" ActiveWidth={true} full={true} />
    </CenterialContainer>
  );
};

export default Trending;
