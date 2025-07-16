import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
// import { useAuthState } from "react-firebase-hooks/auth";
import CenterialContainer from "../CenteralContainer/CenteralContainer";
import { useAuth } from "../../ContextData/Auth";

const ProtectedRoute = ({ children }) => {
  //   const [user, loading] = useAuthState(auth);

  //   if (loading) return <div>Loading...</div>;

  // 🔄 Still checking auth? Show loading or nothing

  const { user, checking } = useAuth();

  if (checking)
    return (
      <CenterialContainer>
        <div>Loading...</div>
      </CenterialContainer>
    );

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
