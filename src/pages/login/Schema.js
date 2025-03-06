import React from "react";
import * as yup from "yup";

export let schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().min(4).max(10).required(),
});
