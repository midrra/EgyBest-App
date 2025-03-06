import React from "react";
import styles from "./Join.module.scss";
import LogTest from "./LogTest";
import SignupForm from "./SignupForm";

function join() {
  return (
    <>
      <div className={styles.container}>
        <LogTest />
        <SignupForm />
        <p className={styles.title}>Join</p>
      </div>
    </>
  );
}

export default join;
