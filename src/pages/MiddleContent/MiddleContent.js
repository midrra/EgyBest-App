import React, { useState, useEffect, useReducer } from "react";
import Content from "./Content";
import Categories from "../../components/Categories/Categories";
import CenterialContainer from "../../components/CenteralContainer/CenteralContainer";
import {
  trendingApi,
  ProgramMovies,
  SportMovies,
  StageMovies,
  LibraryMovies,
  AmericanMovies,
  AnimeMovies,
} from "../../components/Api/Api";

const initialState = {
  trending: [],
  anime: [],
  programs: [],
  sports: [],
  stage: [],
  library: [],
  movies: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TRENDING":
      return { ...state, trending: action.payload };
    case "SET_ANIME":
      return { ...state, anime: action.payload };
    case "SET_PROGRAMS":
      return { ...state, programs: action.payload };
    case "SET_SPORTS":
      return { ...state, sports: action.payload };
    case "SET_STAGE":
      return { ...state, stage: action.payload };
    case "SET_LIBRARY":
      return { ...state, library: action.payload };
    case "SET_MOVIES":
      return { ...state, movies: action.payload };
    default:
      return state;
  }
};

const MiddleContent = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const page = 1;

  useEffect(() => {
    async function fetchData() {
      const trend = await trendingApi(page, "day");
      dispatch({ type: "SET_TRENDING", payload: trend.results });

      const movies = await AmericanMovies(page);
      dispatch({ type: "SET_MOVIES", payload: movies.results });

      const anime = await AnimeMovies(page);
      dispatch({ type: "SET_ANIME", payload: anime.results });

      const programs = await ProgramMovies(page);
      dispatch({ type: "SET_PROGRAMS", payload: programs.results });

      const sports = await SportMovies(page);
      dispatch({ type: "SET_SPORTS", payload: sports.results });

      const stage = await StageMovies(page);
      dispatch({ type: "SET_STAGE", payload: stage.results });

      const library = await LibraryMovies(page);
      dispatch({ type: "SET_LIBRARY", payload: library.results });
    }

    fetchData();
  }, []);

  return (
    <CenterialContainer>
      <Content name={"Trending"} movies={state.trending} />
      <Content name={"movies"} movies={state.movies} />
      <Content name={"Anime"} movies={state.anime} />
      <Content name={"programs"} movies={state.programs} />
      <Content name={"sports"} movies={state.sports} />
      <Content name={"stage"} movies={state.stage} />
      <Content name={"library"} movies={state.library} />
      <Categories position="relative" ActiveWidth={true} full={true} />
    </CenterialContainer>
  );
};

export default MiddleContent;
