import React, { useState, useEffect } from "react";
import styles from "./MainType.module.scss";
import Section from "./Section.js";
import CenterialContainer from "../../components/CenteralContainer/CenteralContainer.js";
import Categories from "../../components/Categories/Categories.js";
import Pagination from "../../components/Pagination/Pagination.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../ContextData/MoviesSlice.js";
import MovieDetail from "../../components/MovieDetail/MovieDetail.js";
import SelectionBar from "./SelectionBar.js";
import { MetroSpinner } from "react-spinners-kit";
import { titleToCategory } from "../../utils/TitleToCategory.js";

function MainType({
  title1,
  title2,
  title3,
  title4,
  selectData,
  mediaType,
  years,
  language,
  sort,
  country,
}) {
  const dispatch = useDispatch();
  const [isFiltering, setIsFiltering] = useState(false);
  const [active, setActive] = useState(1);
  const [hover, setHover] = useState(1);
  const [title, setTitle] = useState(title4);
  const [filters, setFilters] = useState({
    year: "",
    language: "",
    type: "",
    accuracy: "",
    country: "",
    translation: "",
  });

  const category = titleToCategory(
    title,
    mediaType,
    title1,
    title2,
    title3,
    title4
  );

  const movieData = useSelector((state) => {
    return isFiltering
      ? state.movieChoose[mediaType]
      : state.movieChoose[category];
  });
  const { data, totalPages, loading } = movieData;

  const resetFilters = () => {
    setFilters({
      year: "",
      language: "",
      type: "",
      accuracy: "",
      country: "",
      translation: "",
    });
  };

  useEffect(() => {
    resetFilters();
    dispatch(fetchMovies({ category, page: 1 }));
  }, [title, dispatch]);

  useEffect(() => {
    const active = Object.values(filters).some((val) => val !== "");
    setIsFiltering(active);

    if (active) {
      dispatch(
        fetchMovies({
          category: mediaType,
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
          selectData={selectData}
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
            category={isFiltering ? mediaType : category}
            totalPages={totalPages}
            filters={filters}
          />
        </div>
      </div>
      <Categories position="relative" ActiveWidth={true} full={true} />
    </CenterialContainer>
  );
}

export default MainType;
