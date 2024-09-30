import { useState } from "react";
import CenterialContainer from "../CenteralContainer/CenteralContainer";
import styles from "./Trends.module.scss";

import SellIcon from "@mui/icons-material/Sell";
import ChooseHeadicon from "./ChooseHeadicon";
import { headTrends } from "./TrendsData";
import MovieSketch from "../MovieSketch/MovieSketch";
import { Mdata } from "../Api/Mdata";

const Trending = () => {
  const [trend, setTrend] = useState(headTrends[1].id);

  const date = new Date("9/31/2022");

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const time = date.getTime();

  // console.log(year, month, day);

  const present = new Date();

  const presentYear = present.getFullYear();
  const presentMonth = present.getMonth();
  const presentDay = present.getDate();
  const presentMany = present.getMilliseconds();
  const presentTime = present.getTime();

  // console.log(presentYear, presentMonth, presentDay, presentMany);
  const res = presentTime - time;
  console.log(res / 100 / 60 / 60 / 24);
  // console.log(presentTime / 60 / 60 / 60 / 60);

  // const exp = Date();
  // console.log(exp);

  return (
    <CenterialContainer>
      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.content}>
            {headTrends.map((item) => (
              <ChooseHeadicon
                key={item.id}
                logo={item?.logo}
                title={item.title}
                setTrend={setTrend}
                id={item.id}
                active={trend === item.id}
              />
            ))}
          </div>
        </div>
        <hr />
        <div className={styles.man}>
          {/* <MovieSketch
            movies={Mdata}
            width={"176px"}
            height={"250px"}
            wrap={"wrap"}
          /> */}
        </div>
      </div>
    </CenterialContainer>
  );
};

export default Trending;
