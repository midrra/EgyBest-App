import { Fragment } from "react";
import ReactDom from "react-dom";
import styles from "./Overlay.module.scss";

const OverlayCon = () => {
  return <div className={styles.overlay}></div>;
};

const BodyOver = () => {
  return <div className={styles.over}></div>;
};

const Overlay = () => {
  return (
    <Fragment>
      {/* {ReactDom.createPortal(
        <OverlayCon />,
        document.getElementById("overlay")
      )} */}
      {ReactDom.createPortal(<BodyOver />, document.getElementById("overlay"))}
    </Fragment>
  );
};

export default Overlay;
