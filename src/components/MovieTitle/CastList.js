import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = "88170d99a195633ba877280a25be1735";
const BASE_URL = "https://api.themoviedb.org/3";
// const movieId = 12345; // Replace with actual movie ID

const CastList = ({ movieId }) => {
  const [cast, setCast] = useState([]);
  console.log(movieId, "from castlelist");

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
      .then((res) => {
        setCast(res.data.cast);
      })
      .catch((err) => console.error(err));
  }, [movieId]);

  return (
    <div style={{ overflowX: "auto", whiteSpace: "nowrap", padding: "10px 0" }}>
      {cast.map((person) => (
        <div
          key={person.id}
          style={{
            display: "inline-block",
            width: "120px",
            marginRight: "10px",
            textAlign: "center",
          }}
        >
          <img
            src={
              person.profile_path
                ? `https://image.tmdb.org/t/p/w185${person.profile_path}`
                : "https://via.placeholder.com/120x180?text=No+Image"
            }
            alt={person.name}
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <div>{person.name}</div>
          <small style={{ color: "gray" }}>{person.character}</small>
        </div>
      ))}
    </div>
  );
};

export default CastList;
