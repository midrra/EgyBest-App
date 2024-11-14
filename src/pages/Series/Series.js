import React, { useEffect, useState } from "react";
// import StageArt from "../../components/StageArt/StageArt";
import CenterialContainer from "../../components/CenteralContainer/CenteralContainer";
import { seriesApi } from "../../components/Api/Api";
import MainTypes from "../../components/MovieType/MainTypes";
import { seriesData } from "./SeriesData";

const Series = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovie, setFilteredMovie] = useState();
  const [kind, setKind] = useState();

  useEffect(() => {
    const series = async () => {
      const result = await seriesApi();
      setMovies(result);
    };
    series();
  }, [kind]);
  return (
    <CenterialContainer>
      <MainTypes
        filteredMovie={movies}
        setKind={setKind}
        MovieCatData={seriesData}
      />
    </CenterialContainer>
  );
};

export default Series;
