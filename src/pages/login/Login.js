import React, { useState } from "react";
import styles from "./Login.module.scss";
import { Link, Navigate } from "react-router-dom";
import Carousels from "./Carousels";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";
import Checkbox from "@mui/material/Checkbox";

function Login() {
  // const navigate = Navigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();

    //   const form = new FormData(e.target);
    //   const reForm = Object.fromEntries(form.entries());
  };

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  const errorEmail = "it should be a valid email";
  const errorPassword = "password should be 8-20 characters";

  // and include at least 1 letter, 1 number, 1 special character

  const loginHandler = () => {
    // Navigate("/");
  };
  return (
    <div className={styles.container}>
      <div className={styles["mini-container"]}>
        <div className={styles.left}>
          <form onSubmit={submitHandler}>
            <div className={styles.logo}>
              <img src="photes/input-logo.jpg"></img>
            </div>
            <h1>Sign In</h1>
            <div className={styles.email}>
              <input
                name="email"
                type="email"
                dir="ltr"
                placeholder="Email"
                onChange={changeHandler}
              />
              <AccountCircleOutlinedIcon className={styles.mail} />
            </div>
            <p className={styles.errE}>{errorEmail}</p>
            <div className={styles.password}>
              <input
                name="password"
                type="password"
                dir="ltr"
                placeholder="Password"
                onChange={changeHandler}
              />
              <LockIcon className={styles.lock} />
            </div>
            <p className={styles.errPa}>{errorPassword}</p>
            <div className={styles.check}>
              <Link to="#" className={styles.recovery}>
                Recovery Password
              </Link>
              <Checkbox className={styles.checkbox} />
            </div>
            <button onClick={loginHandler}>Login</button>
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
          </form>
        </div>
        <div className={styles.right}>
          <Carousels />
        </div>
      </div>
    </div>
  );
}

export default Login;
