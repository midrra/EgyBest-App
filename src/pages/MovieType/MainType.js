import React, { useState, useEffect } from "react";
import styles from "./MainType.module.scss";
import Section from "./Section.js";
import { years, language, sort, country } from "./MovieCatData.js";
import CenterialContainer from "../../components/CenteralContainer/CenteralContainer.js";
import Categories from "../../components/Categories/Categories.js";
import Pagination from "../../components/Pagination/Pagination.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../ContextData/MoviesSlice.js";
import MovieDetail from "../../components/MovieDetail/MovieDetail.js";
import SelectionBar from "./SelectionBar.js";
import { MetroSpinner } from "react-spinners-kit";

function MainType() {
  const dispatch = useDispatch();
  const [isFiltering, setIsFiltering] = useState(false);
  const [active, setActive] = useState(1);
  const [hover, setHover] = useState(1);
  const [title, setTitle] = useState("افلام");
  const [filters, setFilters] = useState({
    year: "",
    language: "",
    type: "",
    accuracy: "",
    country: "",
    translation: "",
  });

  const titleToCategory = (title) => {
    switch (title) {
      case "احدث الاضافات":
        return "nowPlaying";
      case "افضل الافلام":
        return "topRated";
      case "افلام قادمة":
        return "upcoming";
      case "افلام":
      default:
        return "movies";
    }
  };

  const category = titleToCategory(title);

  const movieData = useSelector((state) => {
    return isFiltering
      ? state.movieChoose["movies"]
      : state.movieChoose[category];
  });
  const { data, totalPages, loading } = movieData;

  useEffect(() => {
    setFilters({
      year: "",
      language: "",
      type: "",
      accuracy: "",
      country: "",
      translation: "",
    });

    dispatch(fetchMovies({ category: category, page: 1 }));
  }, [title, dispatch]);

  useEffect(() => {
    const active = Object.values(filters).some((val) => val !== "");
    setIsFiltering(active);

    if (active) {
      dispatch(
        fetchMovies({
          category: "movies",
          type: filters.type,
          lang: filters.language,
          year: filters.year,
          country: filters.country,
          page: 1,
        })
      );
    }
  }, [filters, dispatch]);

  return (
    <CenterialContainer>
      <div
        className={`${styles.container} ${
          !loading ? styles["hide-after"] : ""
        }`}
      >
        <div className={styles.spinner}>
          <MetroSpinner size={80} color="green" loading={loading} />
        </div>
        <SelectionBar
          setActive={setActive}
          setHover={setHover}
          hover={hover}
          active={active}
          setTitle={setTitle}
        />
        <div className={styles.selectContainer}>
          <div className={styles.selectInner}>
            <Section
              data={years}
              label={"year"}
              setFilters={setFilters}
              filters={filters}
            />
            <Section
              data={language}
              label={"language"}
              setFilters={setFilters}
              filters={filters}
            />
            <Section
              data={sort}
              label={"type"}
              setFilters={setFilters}
              filters={filters}
            />
            <Section
              data={country}
              label={"country"}
              setFilters={setFilters}
              filters={filters}
            />
          </div>
          <MovieDetail movies={data.results} />
          <Pagination
            category={isFiltering ? "movies" : category}
            totalPages={totalPages}
            filters={filters}
          />
        </div>
        <Categories position="relative" ActiveWidth={true} full={true} />
      </div>
    </CenterialContainer>
  );
}

export default MainType;
