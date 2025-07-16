import React from "react";

export const titleToCategory = (
  title,
  mediaType,
  title1,
  title2,
  title3,
  title4
) => {
  //   console.log(title, "from utile");
  console.log(mediaType, "from movies or series file ");
  if (mediaType === "movies") {
    switch (title) {
      case title1:
        return "nowPlaying";
      case title2:
        return "topRated";
      case title3:
        return "upcoming";
      case title4:
      default:
        return "movies";
    }
  } else {
    // console.log(title, "from the else title");
    switch (title) {
      case title1:
        return "nowPlayingSeries";
      case title2:
        return "series";
      case title3:
        return "airingTodaySeries";
      case title4:
        return "topRatedSeries";
      default:
        return "series";
    }
  }
};
