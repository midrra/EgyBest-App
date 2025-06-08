import React, { useState, useEffect, useRef } from "react";
import styles from "./SearchBar.module.scss";
import { useNavigate } from "react-router-dom";

const API_KEY = "88170d99a195633ba877280a25be1735";
const BASE_URL = "https://api.themoviedb.org/3";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [direction, setDirection] = useState("rtl");
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim() !== "") {
        fetchMovies(query);
        setShowResults(true);
      } else {
        setResults([]);
        setMessage("");
        setShowResults(false);
      }
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fetchMovies = async (searchQuery) => {
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
          searchQuery
        )}`
      );
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setResults(data.results);
      } else {
        setResults([]);
        setMessage("No results found.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const input = e.target.value;
    const isEnglish = /^[A-Za-z]/.test(input);
    setDirection(isEnglish ? "ltr" : "rtl");
    setQuery(input);
  };

  const movieHandler = (e) => {
    navigate(`/movie/${e}`);
    setShowResults(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.miniContainer} ref={containerRef}>
        <input
          type="search"
          placeholder="ابحث عن فيلم او مسلسل او ممثل..."
          value={query}
          onChange={handleChange}
          className={styles.input}
          style={{
            direction: direction,
            textAlign: direction === "ltr" ? "left" : "right",
          }}
        />
        {showResults && (
          <div className={styles.resultsContainer}>
            {loading && (
              <p
                className="text-center fw-bold"
                style={{ direction: "ltr"}}
              >
                Loading...
              </p>
            )}
            {!loading && message && (
              <p
                className="text-center fw-bold"
                style={{ direction: "ltr"}}
              >
                {message}
              </p>
            )}
            {!loading &&
              results.map((movie) => (
                <div
                  key={movie.id}
                  className={styles.card}
                  onClick={() => movieHandler(movie.title.split(" ").join("-"))}
                >
                  {movie.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      alt={movie.title}
                      className={styles.poster}
                    />
                  ) : (
                    <div className={styles.placeholder}>No Image</div>
                  )}
                  <div>
                    <strong>{movie.title}</strong>
                    <p className={styles.date}>
                      {movie.release_date ? movie.release_date : "N/A"}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieSearch;
