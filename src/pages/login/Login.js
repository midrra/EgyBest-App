import React, { useState } from "react";
import styles from "./Login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import Carousels from "./Carousels";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase/firebase";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";
import Checkbox from "@mui/material/Checkbox";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required")
    .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, "Invalid email format"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password too long")
    .required("Password is required"),
});

function Login() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({ email: "", password: "" });
  const [showPassword, setshowPassword] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(values, { abortEarly: false });
      setErrors({});

      // submit the data
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User signed in:", user);
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error signing in:", errorCode, errorMessage);
          alert("Invalid email or password. Please try again.");
        });
    } catch (err) {
      const errorObj = {};
      err.inner.forEach((error) => {
        errorObj[error.path] = error.message;
      });
      setErrors(errorObj);
    }
  };

  const signIngoogleHandler = async () => {
    console.log("Google sign-in clicked");
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      navigate("/");
      console.log("Google sign-in successful:", user);
    } catch (err) {
      console.error("Error during Google sign-in:", err);
      setErrors({ email: "Failed to sign in with Google. Please try again." });
    }
  };

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

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
            <h1>Login</h1>
            <div className={styles.email}>
              <input
                name="email"
                type="text"
                dir="ltr"
                placeholder="Email"
                onChange={changeHandler}
              />
              <AccountCircleOutlinedIcon className={styles.mail} />
            </div>
            <p className={styles.errE}>{errors.email}</p>
            <div className={styles.password}>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                dir="ltr"
                placeholder="Password"
                onChange={changeHandler}
              />
              <LockIcon
                className={styles.lock}
                onClick={() => setshowPassword((prev) => !prev)}
              />
            </div>
            <p className={styles.errPa}>{errors.password}</p>
            <button onClick={loginHandler}>Login</button>
            <div className={styles.account}>
              <Link
                to="#"
                className={styles.sign}
                onClick={signIngoogleHandler}
              >
                Sign in with Google
                <GoogleIcon className={styles.gicon} />
              </Link>
            </div>
            <div className={styles.signUp}>
              <span>Do'nt have an account name</span>
              <Link to="/join" className={styles.signIcon}>
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
