// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

import { signInWithEmailAndPassword } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw2RJNbNCSLJaj1g4Mi8dYJbzNf9mguqI",
  authDomain: "egybest-app-76765.firebaseapp.com",
  projectId: "egybest-app-76765",
  storageBucket: "egybest-app-76765.firebasestorage.app",
  messagingSenderId: "9019751481",
  appId: "1:9019751481:web:b3500bf092693a135fa1e8",
  measurementId: "G-6R5PRWJXYK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// const analytics = getAnalytics(app);

export { auth, provider };
