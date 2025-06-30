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

export const EgyptianMovies = () =>
  axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      with_origin_country: "EG",
      language: "ar-EG", // Optional: returns title/overview in Arabic if available
      sort_by: "popularity.desc",
    },
  });

export const koreanMovies = () =>
  axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      with_original_language: "ko", // Korean movies
      with_genres: 18,
      language: "en-US", // Response in English
      sort_by: "popularity.desc",
      certification_country: "KR",
      "certification.lte": "15",
    },
  });

export const JapaneseMovies = () =>
  axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      with_original_language: "ja",
      // with_genres: 35,
      language: "en-US",
      sort_by: "popularity.desc",
      certification_country: "JP",
      "certification.lte": "PG12",
    },
  });

export const HorrorMovies = () =>
  axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      with_genres: 27,
      language: "en-US",
      sort_by: "popularity.desc",
    },
  });

export const KomedyMovies = () =>
  axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      with_genres: 35,
      language: "en-US",
      sort_by: "popularity.desc",
    },
  });

export const AmericanMovies = () =>
  axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      with_original_language: "en",
      language: "en-US",
      sort_by: "popularity.desc",
    },
  });

export const TranGermanMovies = () =>
  axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      with_original_language: "de",
      language: "en-US",
      sort_by: "popularity.desc",
    },
  });

export const ArabicMovies = () =>
  axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      with_origin_country: "EG",
      language: "ar-EG", // Optional: returns title/overview in Arabic if available
      sort_by: "popularity.desc",
      page: 2,
    },
  });

export const InidanMovies = () =>
  axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      with_original_language: "hi",
      language: "en-US",
      sort_by: "popularity.desc",
    },
  });

export const ChineseMovies = () =>
  axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      with_original_language: "zh",
      language: "en-US",
      sort_by: "popularity.desc",
    },
  });

export const ActionMovies = () =>
  axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      with_genres: 28,
      language: "en-US",
      sort_by: "popularity.desc",
    },
  });

export const RomanceMovies = () =>
  axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      with_genres: 10749,
      language: "en-US",
      sort_by: "popularity.desc",
      page: 4,
    },
  });

export const ScienceFictionMovies = () =>
  axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      with_genres: 878,
      language: "en-US",
      sort_by: "popularity.desc",
    },
  });

export const CartoonMovies = () =>
  axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      with_genres: 16,
      language: "en-US",
      sort_by: "popularity.desc",
    },
  });
export const WarMovies = () =>
  axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      with_genres: 10752,
      language: "en-US",
      sort_by: "popularity.desc",
    },
  });

export const DocumentaryMovies = () =>
  axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      with_genres: 99,
      language: "en-US",
      sort_by: "popularity.desc",
    },
  });

export const SportMovies = () =>
  axios.get(`${BASE_URL}/search/tv`, {
    params: {
      api_key: API_KEY,
      query: "wwe",
      language: "en-US",
    },
  });

export const ProgramMovies = () =>
  axios.get(`${BASE_URL}/discover/tv`, {
    params: {
      api_key: API_KEY,
      sort_by: "popularity.desc",
      language: "en-US",
    },
  });

export const StageMovies = () =>
  axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query: "shakespeare",
      language: "en-US",
    },
  });

export const LibraryMovies = () =>
  axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query: "librarian",
      language: "en-US",
    },
  });

export const AnimeMovies = () =>
  axios.get("https://api.themoviedb.org/3/discover/tv", {
    params: {
      api_key: API_KEY,
      with_genres: 16,
      with_original_language: "ja",
      sort_by: "popularity.desc",
      page: 1,
    },
  });
