import React, { useState } from "react";
import axios from "axios";

const API_KEY = "88170d99a195633ba877280a25be1735";
const BASE_URL = "https://api.themoviedb.org/3";

export const topRated = async () => {
  const respond = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=88170d99a195633ba877280a25be1735`
  );
  const result = await respond.json();
  return result.results;
};

export const trendingApi = async (time) => {
  const respond = await fetch(
    `https://api.themoviedb.org/3/trending/all/${time}?api_key=88170d99a195633ba877280a25be1735`
  );
  const result = await respond.json();
  return result.results;
};

export const animeApi = async () => {
  const url =
    "https://api.themoviedb.org/3/discover/tv?air_date.gte=1999&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&timezone=ja";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODE3MGQ5OWExOTU2MzNiYTg3NzI4MGEyNWJlMTczNSIsIm5iZiI6MTcyOTA0MjkzNS44NDc5NzgsInN1YiI6IjYyYTRjZDIxMjU1ZGJhMDA0ZjJlYzU0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AnopcZYx11P40-dJ2H15rv1Ox9TqJgol04GCEnY2wkk",
    },
  };

  const respond = await fetch(url, options);
  const result = await respond.json();
  return result.results;
};

export const seriesApi = async () => {
  const url = "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODE3MGQ5OWExOTU2MzNiYTg3NzI4MGEyNWJlMTczNSIsIm5iZiI6MTcyOTA0MjkzNS44NDc5NzgsInN1YiI6IjYyYTRjZDIxMjU1ZGJhMDA0ZjJlYzU0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AnopcZYx11P40-dJ2H15rv1Ox9TqJgol04GCEnY2wkk",
    },
  };
  const respond = await fetch(url, options);
  const result = await respond.json();
  return result.results;
};

export const moviesApi = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODE3MGQ5OWExOTU2MzNiYTg3NzI4MGEyNWJlMTczNSIsIm5iZiI6MTcyOTA0MjkzNS44NDc5NzgsInN1YiI6IjYyYTRjZDIxMjU1ZGJhMDA0ZjJlYzU0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AnopcZYx11P40-dJ2H15rv1Ox9TqJgol04GCEnY2wkk",
    },
  };
  const respond = await fetch(url, options);
  const result = await respond.json();
  return result.results;
};

export const movieInfo = async (title) => {
  const url = `https://api.themoviedb.org/3/search/multi?query=${title}&include_adult=false&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODE3MGQ5OWExOTU2MzNiYTg3NzI4MGEyNWJlMTczNSIsIm5iZiI6MTcyOTIzODM4NS41MjE0MzcsInN1YiI6IjYyYTRjZDIxMjU1ZGJhMDA0ZjJlYzU0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2WedLbIBZKdzAbEpN3AsBPKM9Iszcm8zbdYwjcpmt9U",
    },
  };

  fetch(url, options);
  const respond = await fetch(url, options);
  const result = await respond.json();
  return result.results;
};

export const fetchEgyptianMovies = () =>
  axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      with_origin_country: "EG",
      language: "ar-EG", // Optional: returns title/overview in Arabic if available
      sort_by: "popularity.desc",
    },
  });
