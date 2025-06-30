import React, { useState, useEffect, useReducer } from "react";
import Content from "./Content";
import Categories from "../Categories/Categories";
import CenterialContainer from "../CenteralContainer/CenteralContainer";
import {
  trendingApi,
  ProgramMovies,
  SportMovies,
  StageMovies,
  LibraryMovies,
  AmericanMovies,
  AnimeMovies,
} from "../Api/Api";

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

  useEffect(() => {
    async function fetchData() {
      const trand = await trendingApi("day");
      dispatch({ type: "SET_TRENDING", payload: trand });

      const movies = await AmericanMovies();
      dispatch({ type: "SET_MOVIES", payload: movies.data.results });

      const anime = await AnimeMovies();
      dispatch({ type: "SET_ANIME", payload: anime.data.results });

      const programs = await ProgramMovies();
      dispatch({ type: "SET_PROGRAMS", payload: programs.data.results });

      const sports = await SportMovies();
      dispatch({ type: "SET_SPORTS", payload: sports.data.results });

      const stage = await StageMovies();
      dispatch({ type: "SET_STAGE", payload: stage.data.results });

      const library = await LibraryMovies();
      dispatch({ type: "SET_LIBRARY", payload: library.data.results });
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
