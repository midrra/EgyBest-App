import React from "react";

export const allTrend = async () => {
  // for (let i = 1; i <= 5; i++) {
  const url = `https://api.themoviedb.org/3/trending/all/day?language=en-US?api_key=THE_KEY&page=5`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODE3MGQ5OWExOTU2MzNiYTg3NzI4MGEyNWJlMTczNSIsIm5iZiI6MTcyODYwNzIxNC41OTkyNjcsInN1YiI6IjYyYTRjZDIxMjU1ZGJhMDA0ZjJlYzU0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M4Pg-sodpybT81GZr_sPsKZm8JJ3T9BQG8nMYYHOwRA",
    },
  };

  const respond = await fetch(url, options);
  const result = await respond.json();
  return result.results;
  //   }
};
