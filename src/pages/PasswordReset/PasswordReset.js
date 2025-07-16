import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Input from "../../components/Input/Input";


function PasswordReset() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent!");
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /> */}
      <Input
        name="passwordReset"
        type="email"
        placeholder="Enter your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Reset Password</button>
    </form>
  );
}

export default PasswordReset;
