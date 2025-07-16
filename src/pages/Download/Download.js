// import React, { useState } from "react";
// import CenterialContainer from "../../components/CenteralContainer/CenteralContainer";
// // import { Alert } from "bootstrap";
// import Alert from "../../utils/Alert";
// import "./Download.css";

// function Download() {
//   return (
//     <CenterialContainer>
//       <h1 style={{ direction: "ltr", textAlign: "center" }}>
//         The server is under maintenance now. Please try again later.
//       </h1>
//     </CenterialContainer>
//   );
// }

// export default Download;

import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import man from "../../assets/images/lz.JPG";

function Download() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ width: 200, height: 200, position: "relative" }}>
      {!loaded && <Skeleton width={200} height={200} />}

      <img
        src={man}
        onLoad={() => setLoaded(true)}
        alt="man"
        width={200}
        height={200}
        style={{
          // position: "absolute",
          // top: 0,
          // left: 0,
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
      />
    </div>
  );
}

export default Download;
