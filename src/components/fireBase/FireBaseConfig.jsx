// src/firebaseConfig.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCARzRpWU8ryEm4j_QaSD08ZOiru_MEuKo",
  authDomain: "handyexperts-95d1b.firebaseapp.com",
  projectId: "handyexperts-95d1b",
  storageBucket: "handyexperts-95d1b.firebasestorage.app",
  messagingSenderId: "590135978949",
  appId: "1:590135978949:web:24bef9703e4ae0cc1039ac",
  measurementId: "G-9Z3ZBG47X2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth (app)
// const analytics = getAnalytics(app);

export {app, auth};
