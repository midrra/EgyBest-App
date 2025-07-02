import axios from "axios";
import { useEffect, useState } from "react";
import { castList } from "../../components/Api/Api";

const CastList = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    castList(movieId)
      .then((res) => {
        setCast(res);
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
