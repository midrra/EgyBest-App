import React, { useEffect } from "react";
import CenterialContainer from "../CenteralContainer/CenteralContainer";
import { animeApi } from "../Api/Api.";

const Anime = () => {
  useEffect(() => {
    // animeApi();
  }, []);

  return (
    <CenterialContainer>
      <div>انمي</div>
    </CenterialContainer>
  );
};

export default Anime;
