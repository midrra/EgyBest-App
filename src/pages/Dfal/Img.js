import React from "react";
import CenterialContainer from "../../components/CenteralContainer/CenteralContainer";
import { useParams, useLocation, useHref } from "react-router-dom";

const Img = () => {
  const location = useLocation();
  const ref = useHref();
  console.log(location.pathname);
  console.log(ref);

  const { id } = useParams();
  console.log(id);

  return (
    <CenterialContainer>
      <div>This is the Details of image</div>;
    </CenterialContainer>
  );
};

export default Img;
