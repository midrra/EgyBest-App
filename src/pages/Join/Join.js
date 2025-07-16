import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import Carousels from "../login/Carousels";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import styles from "./Join.module.scss";

function Join() {
  const [showPassword, setshowPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className={styles["mini-container"]}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <img src="photes/input-logo.jpg"></img>
          </div>
          <h1>Sign up</h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object({
              firstName: Yup.string().required("Enter Your Name"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              password: Yup.string()
                .min(8, "Must be at least 8 characters")
                .required("Required"),
            })}
            onSubmit={(values) => {
              const auth = getAuth();

              createUserWithEmailAndPassword(
                auth,
                values.email,
                values.password
              )
                .then((userCredential) => {
                  // Signed up
                  const user = userCredential.user;
                  console.log("User signed up:", userCredential.user.email);
                  // ✅ Send email verification
                  sendEmailVerification(user)
                    .then((user) => {
                      alert(
                        "Verification email sent. Please check your inbox."
                      );
                      navigate("/login");
                    })
                    .catch((error) => {
                      console.error(
                        "Error sending verification email:",
                        error.message
                      );
                    });
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  alert("Error signing up: " + errorMessage);
                });
            }}
            validateOnChange={true} // ✅ This enables validation on every input change
            validateOnBlur={true}
          >
            {({
              handleChange,
              handleSubmit,
              values,
              errors,
              touched,
              handleBlur,
              setFieldTouched,
            }) => (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="firstName"
                  onChange={(e) => {
                    handleChange(e);
                    setFieldTouched("firstName", true, false);
                  }}
                  onBlur={handleBlur}
                  value={values.firstName}
                  placeholder="FirstName"
                />
                {touched.firstName && errors.firstName && (
                  <p className={styles.error}>{errors.firstName}</p>
                )}

                <input
                  type="email"
                  name="email"
                  onChange={(e) => {
                    handleChange(e);
                    setFieldTouched("email", true, false);
                  }}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="email"
                />
                {touched.email && errors.email && (
                  <p className={styles.error}>{errors.email}</p>
                )}
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={(e) => {
                    handleChange(e);
                    setFieldTouched("password", true, false);
                  }}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Password"
                />
                {touched.password && errors.password && (
                  <p className={styles.error}>{errors.password}</p>
                )}

                <button type="submit">Sign Up</button>
                <p className={styles.login}>
                  You already have an account <a href="/login">login</a>
                </p>
              </form>
            )}
          </Formik>
        </div>
        <div className={styles.right}>
          <Carousels />
        </div>
      </div>
    </div>
  );
}

export default Join;
