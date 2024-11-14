import React from "react";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import Carousels from "./Carousels";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";
import Checkbox from "@mui/material/Checkbox";

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles["mini-container"]}>
        <div className={styles.left}>
          <div className={styles.form}>
            <div className={styles.logo}>
              <img src="photes/input-logo.jpg"></img>
            </div>
            <h1>Sign In</h1>
            <div className={styles.email}>
              <input type="email" dir="ltr" placeholder="Email" />
              <AccountCircleOutlinedIcon className={styles.mail} />
            </div>
            <div className={styles.password}>
              <input type="password" dir="ltr" placeholder="Password" />
              <LockIcon className={styles.lock} />
            </div>
            <div className={styles.check}>
              <Link to="#" className={styles.recovery}>
                Recovery Password
              </Link>
              <Checkbox className={styles.checkbox} />
            </div>
            <button>Login</button>
            <div className={styles.account}>
              <Link to="#" className={styles.sign}>
                Sign in with Google
                <GoogleIcon className={styles.gicon} />
              </Link>
            </div>
            <div className={styles.signUp}>
              <span>Do'nt have an account name</span>
              <Link to="#" className={styles.signIcon}>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          {/* <img src="photes/input-1.jpg" /> */}
          <Carousels />
        </div>
      </div>
    </div>
  );
}

export default Login;
