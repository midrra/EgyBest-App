// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

import { signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyFhd7oA6AdeIANADTjXlY8xgI1d-UKVc",
  authDomain: "egybest-app-d8542.firebaseapp.com",
  projectId: "egybest-app-d8542",
  storageBucket: "egybest-app-d8542.firebasestorage.app",
  messagingSenderId: "887942718584",
  appId: "1:887942718584:web:d461f57953d66df654f98d",
  measurementId: "G-XJ3QPFC8ZZ",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// const analytics = getAnalytics(app);

export { auth, provider };
