import axios from "axios";
import { country } from "../../pages/MovieType/MovieCatData";

const API_KEY = "88170d99a195633ba877280a25be1735";
const BASE_URL = "https://api.themoviedb.org/3";

export const trendingApi = async (page, time) => {
  const respond = await fetch(
    `https://api.themoviedb.org/3/trending/all/${time}?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  const result = await respond.json();
  return result;
};

//MoveTitle
export const movieInfo = async (title) => {
  const url = `https://api.themoviedb.org/3/search/multi?query=${title}&include_adult=false&page=1&language=en-US&api_key=${API_KEY}`;

  const respond = await fetch(url);
  const result = await respond.json();
  return result.results;
};

//Moves section

export const moviesApi = async (page, type, lang, year, country) =>
  axios
    .get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_genres: type,
        with_original_language: lang,
        sort_by: "popularity.desc",
        primary_release_year: year,
        language: country,
        page,
      },
    })
    .then((response) => {
      return response.data;
    });

export const nowPlaying = async (page) =>
  axios
    .get(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}&region=US`
    )
    .then((response) => {
      return response.data;
    });

export const TopRated = async (page) =>
  axios
    .get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
    )
    .then((response) => {
      return response.data;
    });

export const UpcomingMovies = async (page) =>
  axios
    .get(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`
    )
    .then((response) => {
      return response.data;
    });

export const EgyptianMovies = (page) =>
  axios
    .get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_origin_country: "EG",
        language: "ar-EG", // Optional: returns title/overview in Arabic if available
        sort_by: "popularity.desc",
        page,
      },
    })
    .then((response) => {
      return response.data;
    });

export const koreanMovies = (page) =>
  axios
    .get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_original_language: "ko", // Korean movies
        with_genres: 18,
        language: "en-US", // Response in English
        sort_by: "popularity.desc",
        certification_country: "KR",
        "certification.lte": "15",
        page,
      },
    })
    .then((response) => {
      return response.data;
    });

export const JapaneseMovies = (page) =>
  axios
    .get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_original_language: "ja",
        // with_genres: 35,
        language: "en-US",
        sort_by: "popularity.desc",
        certification_country: "JP",
        "certification.lte": "PG12",
        page,
      },
    })
    .then((response) => {
      return response.data;
    });

export const HorrorMovies = (page) =>
  axios
    .get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_genres: 27,
        language: "en-US",
        sort_by: "popularity.desc",
        page,
      },
    })
    .then((response) => {
      return response.data;
    });

export const KomedyMovies = (page) =>
  axios
    .get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_genres: 35,
        language: "en-US",
        sort_by: "popularity.desc",
        page,
      },
    })
    .then((response) => {
      return response.data;
    });

export const AmericanMovies = (page) =>
  axios
    .get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_original_language: "en",
        language: "en-US",
        sort_by: "popularity.desc",
        page,
      },
    })
    .then((response) => {
      return response.data;
    });

export const TranGermanMovies = (page) =>
  axios
    .get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_original_language: "de",
        language: "en-US",
        sort_by: "popularity.desc",
        page,
      },
    })
    .then((response) => {
      return response.data;
    });

export const ArabicMovies = (page) =>
  axios
    .get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_origin_country: "EG",
        language: "ar-EG", // Optional: returns title/overview in Arabic if available
        sort_by: "popularity.desc",
        page: page,
      },
    })
    .then((response) => {
      return response.data;
    });

export const InidanMovies = (page) =>
  axios
    .get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_original_language: "hi",
        language: "en-US",
        sort_by: "popularity.desc",
        page,
      },
    })
    .then((response) => {
      return response.data;
    });

export const ChineseMovies = (page) =>
  axios
    .get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_original_language: "zh",
        language: "en-US",
        sort_by: "popularity.desc",
        page,
      },
    })
    .then((response) => {
      return response.data;
    });

export const ActionMovies = (page) =>
  axios
    .get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_genres: 28,
        language: "en-US",
        sort_by: "popularity.desc",
        page,
      },
    })
    .then((response) => {
      return response.data;
    });

export const RomanceMovies = (page) =>
  axios
    .get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_genres: 10749,
        language: "en-US",
        sort_by: "popularity.desc",
        page: page,
      },
    })
    .then((response) => {
      return response.data;
    });

export const ScienceFictionMovies = (page) =>
  axios
    .get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_genres: 878,
        language: "en-US",
        sort_by: "popularity.desc",
        page,
      },
    })
    .then((response) => {
      return response.data;
    });

export const CartoonMovies = (page) =>
  axios
    .get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_genres: 16,
        language: "en-US",
        sort_by: "popularity.desc",
        page,
      },
    })
    .then((response) => {
      return response.data;
    });

export const WarMovies = (page) =>
  axios
    .get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_genres: 10752,
        language: "en-US",
        sort_by: "popularity.desc",
        page,
      },
    })
    .then((response) => {
      return response.data;
    });

export const DocumentaryMovies = (page) =>
  axios
    .get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_genres: 99,
        language: "en-US",
        sort_by: "popularity.desc",
        page,
      },
    })
    .then((response) => {
      return response.data;
    });

export const SportMovies = (page) =>
  axios
    .get(`${BASE_URL}/search/tv`, {
      params: {
        api_key: API_KEY,
        query: "wwe",
        language: "en-US",
        page: page,
      },
    })
    .then((response) => {
      return response.data;
    });

export const ProgramMovies = (page) =>
  axios
    .get(`${BASE_URL}/discover/tv`, {
      params: {
        api_key: API_KEY,
        sort_by: "popularity.desc",
        language: "en-US",
        page: page,
      },
    })
    .then((response) => {
      return response.data;
    });

export const StageMovies = (page) =>
  axios
    .get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: "shakespeare",
        language: "en-US",
        page: page,
      },
    })
    .then((response) => {
      return response.data;
    });

export const LibraryMovies = (page) =>
  axios
    .get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: "librarian",
        language: "en-US",
        page,
      },
    })
    .then((response) => {
      return response.data;
    });

export const AnimeMovies = (page) =>
  axios
    .get("https://api.themoviedb.org/3/discover/tv", {
      params: {
        api_key: API_KEY,
        with_genres: 16,
        with_original_language: "ja",
        sort_by: "popularity.desc",
        page: page,
      },
    })
    .then((response) => {
      return response.data;
    });

export const getTrailer = async (movieId, type) => {
  const res = await axios.get(`${BASE_URL}/${type}/${movieId}/videos`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
    },
  });
  return res.data;
};

export const castList = async (movieId) => {
  const res = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return res.data.cast;
};
