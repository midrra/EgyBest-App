import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { getTrailer } from "../../components/Api/Api";

function Trailer({ movieId, mediaType }) {
  const [youtubeUrl, setYoutubeUrl] = useState("");

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const data = await getTrailer(movieId, mediaType);
        const trailers = data.results.filter(
          (video) => video.type === "Trailer" || video.site === "YouTube"
        );

        if (trailers.length > 0) {
          const trailerKey = trailers[0].key;
          console.log("Trailer data:", data, trailers, trailerKey);
          setYoutubeUrl(`https://www.youtube.com/watch?v=${trailerKey}`);
        } else {
          console.log("No trailer found.");
        }
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    fetchTrailer();
  }, [movieId, mediaType]);

  return (
    <div className="player-wrapper">
      {youtubeUrl ? (
        <ReactPlayer
          src={youtubeUrl}
          controls
          width="100%"
          height="360px"
          className="my-2"
        />
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
}

export default Trailer;
