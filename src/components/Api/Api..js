import React, { useEffect } from "react";

export const trandingApi = async () => {
  const respond = await fetch(
    "https://api.themoviedb.org/3/trending/all/day?api_key=88170d99a195633ba877280a25be1735"
  );
  const result = await respond.json();
  return result.results;
};

export const animeApi = async () => {
  const respond = await fetch(
    "https://myanimelist.p.rapidapi.com/anime/top/%7Bcategory%7D?p=1",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "1d3e368bb0mshc2423f51c0c5ad5p19b037jsna868922367f0",
        "x-rapidapi-host": "myanimelist.p.rapidapi.com",
      },
    }
  );
  const result = await respond.json();
  return result;
};
